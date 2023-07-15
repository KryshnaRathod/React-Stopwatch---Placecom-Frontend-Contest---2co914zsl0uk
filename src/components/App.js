import React, { useRef, useState } from 'react';
import '../styles/App.css';


function App() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const lapStopwatch = () => {
    setLaps((prevLaps) => [...prevLaps, time.toFixed(3)]);
  };

  const resetStopwatch = () => {
    setTime(0);
    setLaps([]);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time.toFixed(3)}</h2>
      <div>
        <button onClick={startStopwatch}>START</button>
        <button onClick={stopStopwatch}>STOP</button>
        <button onClick={lapStopwatch}>LAP</button>
        <button onClick={resetStopwatch}>RESET</button>
      </div>
      <div
        className="lap-section"
        style={{ display: laps.length > 0 ? "block" : "none" }}
      >
        <h3>Laps:</h3>
        <ul className="laps">
          {laps.map((lap, index) => (
            <li key={index}>{lap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;



  

 



