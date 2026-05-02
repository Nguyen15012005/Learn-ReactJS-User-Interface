import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [id, setID] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const iD = parseInt(id);
      try {
        if (!id) {
          setData(null);
          setError(null);
          return;
        }
        if (iD < 1 || iD > 10 || isNaN(iD)) {
          throw new Error("Không Tìm Thấy User. Vui Lòng Nhập ID Từ 1 Đến 10");
        }
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setData(res.data);
      } catch (err) {
        console.error("Lỗi API: ", err);
        setData(null);
        setError(err.message || "Không thể tải dữ liệu. Vui lòng thử lại");
      } finally {
        setLoading(false);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);
  return (
    <div className='App'>
      <h2>Tra Cứu Thông Tin User</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Nhập id (1-10): </label>
        <input type="number"
          value={id}
          onChange={(e) => setID(e.target.value)} />
      </div>
      <hr />

      {loading && <p>Đang Tìm Kiếm...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Website:</strong> {data.website}</p>
        </div>
      )}
    </div>
  )
}

export default App