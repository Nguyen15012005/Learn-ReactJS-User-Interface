import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(res.data);
            } catch (error) {
                console.error("Lỗi khi fetch data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='App'>
            <h2>Danh Sách User</h2>
            {loading ? (
                <p>...Loading...</p>
            ) : (
                data.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                    </div>
                ))
            )}
        </div>
    )
}

export default App