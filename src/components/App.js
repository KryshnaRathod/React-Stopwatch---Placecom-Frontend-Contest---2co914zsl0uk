import React, { useRef, useState } from 'react';
import '../styles/App.css';

const App = () => {
  const startTime = useRef(0);
  const intervalRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  const startStopwatch = () => {
    if (!intervalRef.current) {
      startTime.current = Date.now() - currentTime;
      intervalRef.current = setInterval(() => {
        setCurrentTime(Date.now() - startTime.current);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const lapStopwatch = () => {
    if (intervalRef.current) {
      const lapTime = formatTime(currentTime);
      setLaps((prevLaps) => [...prevLaps, lapTime]);
    }
  };

  const resetStopwatch = () => {
    stopStopwatch();
    setCurrentTime(0);
    setLaps([]);
  };

  return (
    <div id="main">
      <section>
        <h1 className="seconds-elapsed">{formatTime(currentTime)}</h1>
        <section className="buttons">
          <button className="start-btn" onClick={startStopwatch}>
            START
          </button>
          <button className="stop-btn" onClick={stopStopwatch}>
            STOP
          </button>
          <button className="lap-btn" onClick={lapStopwatch}>
            LAP
          </button>
          <button className="reset-btn" onClick={resetStopwatch}>
            RESET
          </button>
        </section>
      </section>
      {laps.length > 0 && (
        <section className="lap-section">
          <h2>Laps</h2>
          <section className="laps">
            {laps.map((lap, index) => (
              <p key={index}>{lap}</p>
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default App;

