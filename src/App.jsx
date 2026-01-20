import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from "./util/investment";
import { useState, useEffect } from "react";

const initialValues = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12,
};

function App() {
  const [inputValues, setInputValues] = useState(initialValues);
  const [resultValues, setResultValues] = useState([]);

  useEffect(() => {
    const result = calculateInvestmentResults(inputValues);
    setResultValues(result);
  }, [inputValues]);

  function handleOnValueChange(event) {
    const { id, value } = event.target;
    setInputValues((prevInputValue) => ({
      ...prevInputValue,
      [id]: Number(value),
    }));
  }
  return (
    <div>
      <UserInput
        inputValues={inputValues}
        onChange={handleOnValueChange}
      ></UserInput>
      {resultValues.length > 0 ? (
        <ResultTable result={resultValues}></ResultTable>
      ) : (
        <p className="center">Please enter valid Data!</p>
      )}
    </div>
  );
}

export default App;
