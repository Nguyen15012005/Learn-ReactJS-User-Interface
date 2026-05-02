import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback } from 'react';

// --- 1. useState: Bộ đếm ---
const CounterExample = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h3>1. useState (Counter)</h3>
      <p>Số hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng số</button>
    </section>
  );
};

// --- 2. useEffect: Đồng hồ ---
const TimerExample = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []);
  return (
    <section>
      <h3>2. useEffect (Timer)</h3>
      <p>Thời gian đã trôi qua: {seconds} giây</p>
    </section>
  );
};

// --- 3. useReducer: Quản lý Todo đơn giản ---
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE': return state.filter(todo => todo.id !== action.id);
    default: return state;
  }
};
const ReducerExample = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input) {
      dispatch({ type: 'ADD', text: input });
      setInput('');
    }
  };

  return (
    <section>
      <h3>3. useReducer (TodoList)</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {todos.map(t => (
          <li key={t.id} onClick={() => dispatch({ type: 'REMOVE', id: t.id })}>{t.text} (Click để xóa)</li>
        ))}
      </ul>
    </section>
  );
};

// --- 4. useRef: Focus Input ---
const RefExample = () => {
  const inputRef = useRef();
  return (
    <section>
      <h3>4. useRef (Focus)</h3>
      <input ref={inputRef} placeholder="Nhấn nút để focus..." />
      <button onClick={() => inputRef.current.focus()}>Focus vào tôi</button>
    </section>
  );
};

// --- 5. useMemo: Tính số bình phương (giả lập tính toán nặng) ---
const MemoExample = () => {
  const [num, setNum] = useState(5);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log('Đang tính toán nặng...');
    return num * 2;
  }, [num]);

  return (
    <section style={{ background: dark ? '#333' : '#fff', color: dark ? '#fff' : '#000' }}>
      <h3>5. useMemo</h3>
      <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
      <p>Kết quả x2: {doubleNumber}</p>
      <button onClick={() => setDark(!dark)}>Đổi màu nền (Không tính toán lại x2)</button>
    </section>
  );
};

// --- 6. useCallback: Hàm không bị tạo lại ---
const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Hàm này được giữ nguyên bộ nhớ

  return (
    <section>
      <h3>6. useCallback</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Tăng count</button>
    </section>
  );
};

// --- COMPONENT CHÍNH ---
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Review React Hooks</h1>
      <hr />
      <CounterExample />
      <hr />
      <TimerExample />
      <hr />
      <ReducerExample />
      <hr />
      <RefExample />
      <hr />
      <MemoExample />
      <hr />
      <CallbackExample />
    </div>
  );
}
