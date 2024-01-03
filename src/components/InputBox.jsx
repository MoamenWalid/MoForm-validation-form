
const InputBox = ({ labelFor, lable, onBlur, onChange, type, placeholder, id, name, value }) => {
  return (
    <>
      <label htmlFor={labelFor}>{lable}</label>
      <input onBlur={onBlur} onChange={onChange} type={type} placeholder={placeholder} autoComplete="off" id={id} name={name} value={value} />
    </>
  );
}

export default InputBox;
