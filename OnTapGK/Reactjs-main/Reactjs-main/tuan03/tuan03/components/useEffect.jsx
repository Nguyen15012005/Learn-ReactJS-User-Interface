import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // Cleanup function: dọn dẹp khi component unmount
    return () => clearInterval(interval);
  }, []); // [] có nghĩa là chỉ chạy 1 lần sau khi mount

  return <div>Timer: {seconds}s</div>;
}