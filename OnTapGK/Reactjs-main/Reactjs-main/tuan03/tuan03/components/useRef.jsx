import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Focus thẳng vào ô input
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus vào ô nhập</button>
    </>
  );
}