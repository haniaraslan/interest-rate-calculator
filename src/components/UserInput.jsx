import InputGroup from "./InputGroup";

export default function UserInput({ inputValues, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputGroup
          id="initialInvestment"
          label="Initial Investment"
          type="number"
          defaultValue={inputValues.initialInvestment}
          onChange={onChange}
        />
        <InputGroup
          id="annualInvestment"
          label="Annual Interest"
          type="number"
          defaultValue={inputValues.annualInvestment}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <InputGroup
          id="expectedReturn"
          label="Expected Return"
          type="number"
          defaultValue={inputValues.expectedReturn}
          onChange={onChange}
        />
        <InputGroup
          id="duration"
          label="Expiration"
          type="number"
          defaultValue={inputValues.duration}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
