import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(null);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 200;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <BillInput bill={bill} onInput={setBill} />
      <SelectInput percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service ?
      </SelectInput>
      <SelectInput percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend like the service ?
      </SelectInput>
      <Output bill={bill} tip={tip} finalBill={bill + tip} />
      <Reset onReset={handleReset} />
    </>
  );
}

function BillInput({ bill, onInput }) {
  return (
    <div>
      <label>How much was the bill ? </label>
      <input
        type="text"
        onInput={(e) => onInput(Number(e.target.value))}
        value={bill}
      />
    </div>
  );
}

function SelectInput({ percentage, setPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value="0">Horrible experience (0%)</option>
        <option value="5">Decent service (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">WOW AMAZING (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, finalBill, tip }) {
  return <h3>{bill && `You pay ${finalBill} ($${bill} + $${tip} tip)`}</h3>;
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
