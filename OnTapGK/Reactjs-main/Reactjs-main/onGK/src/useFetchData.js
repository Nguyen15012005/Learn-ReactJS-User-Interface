import { useState, useEffect } from 'react';

// Custom Hook: Nhận vào đường dẫn file hoặc API URL
export const useFetchData = (dataSource) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Giả lập delay 1s để thấy rõ trạng thái Loading khi đi thi
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // dataSource có thể là file JSON import sẵn hoặc URL API
        setData(dataSource); 
        setError(null);
      } catch (err) {
        setError("Không thể tải dữ liệu!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataSource]);

  return { data, loading, error };
};