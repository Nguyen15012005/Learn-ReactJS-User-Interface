import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import { UseFetchData } from "./hooks/useFetchData";
import { expect, test, vi } from "vitest";

// ================= MOCK =================
vi.mock("./hooks/UseFetchData.js");

// ================= HEADER =================
test("Header hiển thị tiêu đề", () => {
  render(<Header />);
  expect(screen.getByText("Hệ thống quản lý sản phẩm")).toBeInTheDocument();
});

// ================= FOOTER =================
test("Footer hiển thị thông tin sinh viên", () => {
  render(<Footer />);
  expect(screen.getByText("23664121 - Lê Nguyễn Quốc Huy")).toBeInTheDocument();
});

// ================= PRODUCT ITEM =================
const mockProduct = {
  id: 1,
  name: "iPhone",
  price: 1000,
  category: "phone",
  image: "test.jpg",
};

test("ProductItem hiển thị thông tin", () => {
  render(<ProductItem product={mockProduct} onDelete={() => {}} />);

  expect(screen.getByText("iPhone")).toBeInTheDocument();
  expect(screen.getByText("1000")).toBeInTheDocument();
  expect(screen.getByText("phone")).toBeInTheDocument();
});

test("ProductItem click delete", () => {
  const mockDelete = vi.fn();

  render(<ProductItem product={mockProduct} onDelete={mockDelete} />);

  fireEvent.click(screen.getByText("Delete"));

  expect(mockDelete).toHaveBeenCalledWith(1);
});

// ================= PRODUCT LIST =================
test("ProductList hiển thị loading và data", async () => {
  UseFetchData.mockResolvedValue([
    {
      id: 1,
      name: "iPhone",
      price: 1000,
      category: "phone",
      image: "",
    },
  ]);

  render(<ProductList />);

  expect(screen.getByText("Loading .....")).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText("iPhone")).toBeInTheDocument());
});

test("Search hoạt động", async () => {
  UseFetchData.mockResolvedValue([
    { id: 1, name: "iPhone", price: 1000, category: "phone" },
    { id: 2, name: "Samsung", price: 900, category: "phone" },
  ]);

  render(<ProductList />);

  await waitFor(() => screen.getByText("iPhone"));

  fireEvent.change(screen.getByLabelText("Search:"), {
    target: { value: "iphone" },
  });

  expect(screen.getByText("iPhone")).toBeInTheDocument();
});

test("Delete sản phẩm trong ProductList", async () => {
  UseFetchData.mockResolvedValue([
    { id: 1, name: "iPhone", price: 1000, category: "phone" },
  ]);

  render(<ProductList />);

  await waitFor(() => screen.getByText("iPhone"));

  fireEvent.click(screen.getByText("Delete"));

  expect(screen.queryByText("iPhone")).not.toBeInTheDocument();
});
