import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Hàm này sẽ không bị tạo lại trừ khi count thay đổi
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child increment={increment} />;
}

const Child = ({ increment }) => <button onClick={increment}>Tăng</button>;