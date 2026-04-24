import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

// Mock đúng đường dẫn file json mà App.jsx đang dùng
jest.mock('../data.json', () => [
  { id: 1, name: 'Học React', status: 'completed' },
  { id: 2, name: 'Luyện Jest', status: 'pending' }
]);

test('App lọc đúng dữ liệu', async () => {
  render(<App />);

  // Chờ findBy vì useFetchData có loading
  const item = await screen.findByText(/Học React/i, {}, { timeout: 2000 });
  expect(item).toBeInTheDocument();

  const input = screen.getByPlaceholderText(/Search/i);
  fireEvent.change(input, { target: { value: 'Jest' } });

  expect(screen.getByText(/Luyện Jest/i)).toBeInTheDocument();
  expect(screen.queryByText(/Học React/i)).not.toBeInTheDocument();
});