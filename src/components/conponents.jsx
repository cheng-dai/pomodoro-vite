function Display({ timeLeft }) {
  return (
    <div className="shadow-md w-[500px] text-center p-8 rounded-md text-8xl font-mono tracking-tight">
      {Math.floor(timeLeft / 60)} : {String(timeLeft % 60).padStart(2, "0")}
    </div>
  );
}

function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-cyan-700 rounded-md shadow-md"
    >
      {text}
    </button>
  );
}
export { Display, Button };
