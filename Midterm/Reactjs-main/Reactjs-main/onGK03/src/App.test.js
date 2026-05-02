import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

jest.mock('../data.json', () => [
    { id: 1, name: "Học React", status: "completed" },
    { id: 2, name: "Luyện Jest", status: "pending" }
])

test('App lọc đúng dữ liệu', async () => {
    render(<App />);
    const item = await screen.findByText(/Học React/i, {}, { timeout: 2000 });
    expect(item).toBeInTheDocument();
    const input = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(input, { target: { value: 'Jest' } });
    expect(screen.getByText(/Luyện Jest/i)).toBeInTheDocument();
    expect(screen.queryByText(/Học React/)).not.toBeInTheDocument();
})

// import { render, screen, fireEvent } from '@testing-library/react';
// import React from 'react';
// import SearchBar from './components/SearchBar'; // Kiểm tra lại đường dẫn file của bạn
// import '@testing-library/jest-dom';

// describe('Kiểm tra Component SearchBar', () => {
  
//   test('Hàm onChange được gọi với đúng giá trị khi người dùng nhập liệu', () => {
//     // 1. Tạo một hàm giả (Mock function)
//     const mockOnChange = jest.fn();
    
//     // 2. Render component với hàm giả đó
//     render(<SearchBar onChange={mockOnChange} />);

//     // 3. Tìm ô input bằng placeholder "Search"
//     const inputElement = screen.getByPlaceholderText(/Search/i);

//     // 4. Giả lập hành động gõ chữ "React"
//     fireEvent.change(inputElement, { target: { value: 'React' } });

//     // 5. Kiểm tra xem hàm mockOnChange có được gọi đúng 1 lần không
//     expect(mockOnChange).toHaveBeenCalledTimes(1);
    
//     // 6. Kiểm tra xem giá trị truyền vào hàm có phải là 'React' không
//     expect(mockOnChange).toHaveBeenCalledWith('React');
//   });

//   test('Kiểm tra inputRef có hoạt động chính xác không', () => {
//     // Tạo một ref giả
//     const mockRef = React.createRef();
    
//     render(<SearchBar onChange={() => {}} inputRef={mockRef} />);

//     // Kiểm tra xem mockRef.current có trỏ đúng vào phần tử input không
//     expect(mockRef.current).toBeInstanceOf(HTMLInputElement);
//     expect(mockRef.current.placeholder).toBe('Search');
//   });

// });