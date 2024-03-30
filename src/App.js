import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [isOpen, setisOpen] = useState(true);
  function open_close() {
    setisOpen((isOpen) => !isOpen);
  }
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  return (
    <>
      <button className="close" onClick={open_close}>
        ❌
      </button>
      <div>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              step {step} : {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#FFC94A" }}
                onClick={handlePrevious}
              >
                previous
              </button>
              <button
                style={{ backgroundColor: "#FFC94A" }}
                onClick={handleNext}
              >
                next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
