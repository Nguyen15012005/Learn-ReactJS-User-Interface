import React, { useState, useEffect } from 'react';
import { getUsers, createUser, deleteUser } from '../components/api';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  // Hàm lấy danh sách (Read)
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      alert("Lỗi khi lấy dữ liệu!");
    }
    setLoading(false);
  };

  // Chạy lần đầu khi load trang
  useEffect(() => {
    fetchUsers();
  }, []);

  // Hàm thêm user (Create)
  const handleAdd = async () => {
    if (!name) return;
    const newUser = await createUser(name);
    setUsers([...users, newUser]);
    setName(''); // Xóa ô input sau khi thêm
  };

  // Hàm xóa user (Delete)
  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      await deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Quản lý User (CRUD)</h1>
        
        {/* Input thêm mới */}
        <div className="flex gap-2 mb-6">
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 flex-1 rounded"
            placeholder="Nhập tên user..."
          />
          <button 
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Thêm
          </button>
        </div>

        {/* Danh sách User */}
        {loading ? <p>Đang tải...</p> : (
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user.id} className="flex justify-between items-center p-2 border-b">
                <span>{user.name}</span>
                <button 
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
        
        <button 
          onClick={fetchUsers}
          className="mt-4 w-full py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
        >
          Làm mới danh sách
        </button>
      </div>
    </div>
  );
}

export default App;