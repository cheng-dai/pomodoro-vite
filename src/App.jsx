import { useState, useEffect } from "react";
import alarm from "./assets/377_bon_homme.mp3";
import { Display, Button } from "./components/conponents";

function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const audio = new Audio(alarm);
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(
        () => setTimeLeft((prevTime) => prevTime - 1),
        1000
      );
    } else if (timeLeft === 0) {
      audio.play();
      setIsRunning(false);
      setTimeLeft(1 * 10);
      setTotalTime((totalTime) => totalTime + 25);
      window.localStorage.s
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);
  return (
    <div className="flex flex-col justify-center h-full text-3xl gap-20 items-center bg-slate-600">
      <Display timeLeft={timeLeft} />
      <Button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
        text={isRunning ? "stop" : "start"}
      />

      <div className="text-center">
        You have focused for{" "}
        <span className="text-4xl px-2 "> {totalTime} mins</span> today!
      </div>
    </div>
  );
}

export default App;
