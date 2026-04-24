import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     setPosts(res.data);
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     setError("Lỗi tải dữ liệu");
  //     setLoading(false);
  //   })
  // },[])

fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
         setPosts(data);
         setLoading(false);
      })

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //       setPosts(res.data);
  //     } catch (err) {
  //       setError("Không tìm thấy!");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchPosts();
  // }, []);
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div className='App'>
        <h2>Fetch & Search Filter</h2>

        <div style={{marginBottom: '20px'}}>
            <input type="text"
                   placeholder='Tìm kiếm theo tiêu đề'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)} />
        </div>

        <hr />

        {loading && <p>Đang tải bài viết...</p>}

        {error && <p style={{color: 'red'}}>{error}</p>}

        {!loading && !error && (
          <div>
            <p>Hiển thị <strong>{filteredPosts.length}</strong>/{posts.length}</p>
            {filteredPosts.length >0 ? (
              filteredPosts.map((post) =>(
                <div key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))
            ):(
              <p>Không tìm thấy bài viết khớp với từ khóa!</p>
            )}
          </div>
        )}
      </div>
  )
}
  export default App