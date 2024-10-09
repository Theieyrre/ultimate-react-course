import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <div className="row">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <p>{step}</p>
      </div>
      <div className="row">
        <button onClick={() => setCount((c) => c - Number(step))}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => setCount((c) => c + Number(step))}>+</button>
      </div>
      <div className="row">
        <p className="message">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
      {count !== 0 || step !== 1 ? (
        <div className="row">
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
