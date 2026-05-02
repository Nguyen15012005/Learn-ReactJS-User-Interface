import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from '../../baitap04.1/public/data.json'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); 
  const [loading, setLoading] = useState(true);

useEffect(() => {
    setPosts(data)
  }, []);
  const filteredPosts = selectedCategory === "all" ? posts 
    : posts.filter(post => post.userId === parseInt(selectedCategory));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Bộ lọc bài viết theo Category</h2>

      <div style={{ marginBottom: '20px' }}>
        <label>Chọn danh mục (User ID): </label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '5px 10px', borderRadius: '4px' }}
        >
          <option value="all">Tất cả bài viết</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
          {/* <option value="4">User 4</option>
          <option value="5">User 5</option> */}
        </select>
      </div>

      <hr />

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div>
          <p>Tìm thấy <strong>{filteredPosts.length}</strong> bài viết</p>
          
          <div style={{ display: 'grid', gap: '10px' }}>
            {filteredPosts.map(post => (
              <div key={post.id} style={{ 
                border: '1px solid #ddd', 
                padding: '10px', 
                borderRadius: '10px',
                backgroundColor: '#123456'
              }}>
                <h4 style={{ margin: '0' }}>{post.title}</h4>
                <p style={{ color: 'blue' }}>Category ID: {post.userId}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App