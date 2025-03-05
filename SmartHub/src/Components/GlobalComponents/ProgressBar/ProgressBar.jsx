import { useState, useEffect } from "react";

const ProgressBar = ({ start }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (start) {
      setProgress(0); // Reset progress when button is clicked
      let interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return oldProgress + 5;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [start]);

  return (
    <div style={{ position: "relative", width: "100%", height: "5px" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "red",
          transition: "width 0.1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
