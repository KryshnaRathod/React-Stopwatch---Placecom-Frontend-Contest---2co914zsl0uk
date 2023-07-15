import React, { useRef, useState } from 'react';
import '../styles/App.css';


const App = () => {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 0.01);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const lapTimer = () => {
    setLaps((prevLaps) => [...prevLaps, time.toFixed(3)]);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setLaps([]);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="timer">{time.toFixed(3)}</div>
      <div className="controls">
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={lapTimer}>LAP</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
      <div className="lap-section">
        {laps.length > 0 && (
          <div>
            <h2>Lap Times</h2>
            <ul className="laps">
              {laps.map((lap, index) => (
                <li key={index}>{lap}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;




 
     


  

 



