export default function InputGroup({ id, label, type, value, onChange }) {
  console.log(value);
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        type={type}
        defaultValue={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
