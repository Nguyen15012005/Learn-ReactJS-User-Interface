import { useMemo, useState } from 'react';

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log("Đang tính toán...");
    return num * 2; // Giả sử đây là logic rất nặng
  }, [num]); // Chỉ tính lại khi num thay đổi

  return <div>Kết quả: {result}</div>;
}