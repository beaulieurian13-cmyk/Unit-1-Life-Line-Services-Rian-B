const Input = ({ id, label, type, value, min, required, handleChange }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <input
        id={id}
        type={type || "text" || "tel" || "file"}
        required={required}
        value={value}
        min={min}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
