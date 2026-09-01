const TextArea = ({ id, label, value, required, handleChange }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <textarea id={id} 
      value={value} 
      required={required}
      onChange={handleChange} 
      rows={4} 
      />
    </>
  );
};

export default TextArea;
