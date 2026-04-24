import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (source) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // GIẢ LẬP DELAY 1 GIÂY (Để thấy chữ Loading... khi đi thi)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 1. Nếu source là String (Link API)
        if (typeof source === 'string') {
          const res = await axios.get(source);
          setData(res.data);
        } 
        // 2. Nếu source là Array (File JSON import)
        else if (Array.isArray(source)) {
          setData(source);
        }
        
        setError(null);
      } catch (err) {
        setError("Lỗi: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [source]);

  return { data, loading, error };
};