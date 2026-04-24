import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import './App.css'
import ComboBox from './components/ComboBox'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
import inputData from '../data.json' // Đảm bảo file này tồn tại ở thư mục cha
import { useFetchData } from './useFetchData' 

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const inputRef = useRef(null);

  // Gọi Custom Hook
  const { data, loading, error } = useFetchData(inputData);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSearch = useCallback((search) => {
    setSearchQuery(search);
  }, []);

  const handleChange = useCallback((filter) => {
    setStatusFilter(filter);
  }, []);

  const displayedData = useMemo(() => {
    return data.filter((todo) => {
      // Kiểm tra tồn tại của todo.name để tránh lỗi crash nếu data thiếu trường
      const matchesSearch = todo.name?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === "All" || 
                           todo.status?.toLowerCase() === statusFilter.toLowerCase();
                           
      return matchesSearch && matchesStatus;
    });
  }, [data, searchQuery, statusFilter]);

  return (
    <div className='App'>
      <h1>Quản Lý Công Việc</h1>

      <SearchBar onChange={handleSearch} inputRef={inputRef} />
      <ComboBox onChange={handleChange} />
      
      {loading && <p>⏳ Đang tải dữ liệu, vui lòng đợi...</p>}
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}

      {!loading && !error && (
        <>
          <p>Tìm thấy: <b>{displayedData.length}</b> kết quả</p>
          <TodoList data={displayedData} />
        </>
      )}
      
      {!loading && !error && displayedData.length === 0 && (
        <p>Chưa có công việc nào phù hợp.</p>
      )}
    </div>
  )
}

export default App