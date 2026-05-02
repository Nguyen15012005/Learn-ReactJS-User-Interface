import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [remainingTime, setRemainingTime] = useState(3000);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return <progress max={3000} value={remainingTime}></progress>;
};

export default ProgressBar;
