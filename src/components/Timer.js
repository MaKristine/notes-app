import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function Timer() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Timer</h1>
      <div style={{fontSize: '50px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Stop</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}