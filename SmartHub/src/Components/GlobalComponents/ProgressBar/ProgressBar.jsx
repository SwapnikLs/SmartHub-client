import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? 90 : prev + 10));
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          onComplete();
        }, 300);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isLoading, onComplete]);

  return isLoading ? (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  ) : null;
};

export default ProgressBar;
