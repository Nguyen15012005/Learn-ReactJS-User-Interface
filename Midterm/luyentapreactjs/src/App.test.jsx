import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("./hooks/UseFetchAPI", () => ({
  __esModule: true,
  UseFetchAPI: jest.fn(),
}));

import { UseFetchAPI } from "./hooks/UseFetchAPI";
import App from "./App";

const mockProducts = [
  { id: 1, name: "iPhone", price: 1000, category: "phone" },
  { id: 2, name: "MacBook", price: 2500, category: "laptop" },
  { id: 3, name: "iPad", price: 1200, category: "tablet" },
];

const setupHook = ({
  data = mockProducts,
  loading = false,
  error = null,
} = {}) => {
  UseFetchAPI.mockReturnValue({ data, loading, error });
};

describe("App - Product Management", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("render header", () => {
    setupHook();
    render(<App />);
    expect(
      screen.getByText(/hệ thống quản lý sản phẩm/i)
    ).toBeInTheDocument();
  });

  test("show loading state", () => {
    setupHook({ data: [], loading: true, error: null });
    render(<App />);
    expect(screen.getByText(/đang tải|loading/i)).toBeInTheDocument();
  });

  test("show error state", () => {
    setupHook({ data: [], loading: false, error: "Network Error" });
    render(<App />);
    expect(screen.getByText(/network error|lỗi/i)).toBeInTheDocument();
  });

  test("render initial product list", () => {
    setupHook();
    render(<App />);

    expect(screen.getByText("iPhone")).toBeInTheDocument();
    expect(screen.getByText("MacBook")).toBeInTheDocument();
    expect(screen.getByText("iPad")).toBeInTheDocument();
  });

  test("search product by name", async () => {
    setupHook();
    render(<App />);
    const user = userEvent.setup();

    // Yêu cầu App có input data-testid="search-input"
    const searchInput = screen.getByTestId("search-input");
    await user.type(searchInput, "MacBook");

    expect(screen.getByText("MacBook")).toBeInTheDocument();
    expect(screen.queryByText("iPhone")).not.toBeInTheDocument();
    expect(screen.queryByText("iPad")).not.toBeInTheDocument();
  });

  test("filter by category", async () => {
    setupHook();
    render(<App />);
    const user = userEvent.setup();

    // Yêu cầu App có select data-testid="category-filter"
    const categoryFilter = screen.getByTestId("category-filter");
    await user.selectOptions(categoryFilter, "phone");

    expect(screen.getByText("iPhone")).toBeInTheDocument();
    expect(screen.queryByText("MacBook")).not.toBeInTheDocument();
    expect(screen.queryByText("iPad")).not.toBeInTheDocument();
  });

  test("add new product", async () => {
    setupHook();
    render(<App />);
    const user = userEvent.setup();

    // Yêu cầu App có các testid bên dưới
    await user.type(screen.getByTestId("product-name-input"), "Galaxy S24");
    await user.type(screen.getByTestId("product-price-input"), "900");
    await user.selectOptions(screen.getByTestId("product-category-input"), "phone");
    await user.click(screen.getByTestId("add-product-btn"));

    expect(screen.getByText("Galaxy S24")).toBeInTheDocument();
  });

  test("delete product", async () => {
    setupHook();
    render(<App />);
    const user = userEvent.setup();

    // Yêu cầu mỗi item có: data-testid="product-item-{id}"
    // và nút xóa bên trong: data-testid="delete-product-btn"
    const item = screen.getByTestId("product-item-1");
    const deleteBtn = within(item).getByTestId("delete-product-btn");

    await user.click(deleteBtn);

    expect(screen.queryByText("iPhone")).not.toBeInTheDocument();
  });

  test("show empty state when no products", () => {
    setupHook({ data: [], loading: false, error: null });
    render(<App />);

    expect(
      screen.getByText(/không có sản phẩm|no products/i)
    ).toBeInTheDocument();
  });
});