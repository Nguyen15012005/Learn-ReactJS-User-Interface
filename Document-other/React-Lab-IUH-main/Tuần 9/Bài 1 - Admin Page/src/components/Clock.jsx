import React, { useEffect, useState } from "react";

const formatTime = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(formatTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="text-xl font-semibold">{currentTime}</div>;
};

export default React.memo(Clock);
