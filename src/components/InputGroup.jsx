export default function InputGroup(props) {
  const { label, ...inputProps } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...inputProps}></input>
    </div>
  );
}
