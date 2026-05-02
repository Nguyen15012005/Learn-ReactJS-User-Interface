import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(res.data);
      } catch (err) {
        console.error("Lỗi API: ", err);
        setError("Không thể tải danh sách người dùng. Vui lòng thử lại");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);


  return (
    <div className='App'>
      <h2>Danh Sách User</h2>
      {/* TH1: Đang Tải Dữ Liệu */}
      {loading && (
        <div className='loader'>
          <h3>Đang tải dữ liệu. Vui lòng chờ!</h3>
        </div>
      )}

      {/* TH2: Có Lỗi Xảy Ra */}
      {!loading && error && (
        <div style={{ color: 'red', border: '1px solid red', padding: '10px' }}>
          {error}
        </div>
      )}

      {/* TH3: Load Được Dữ Liệu */}
      {!loading && !error &&(
        <div className='user-list'>
          {data.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
            </div>
                        
          ))}
        </div>
      )}
    </div>

  )
}

export default App;