const Radio = ({ id, label, name, options, value, required, handleChange }) => {
  return (
    <>
      <label>
        {label}
        {required && "*"}
      </label>
      {options.map((option) => (
        <div key={option}>
          <input
            id={`${id}-${option}`}
            type="radio"
            name={name}
            value={option}
            required={required}
            checked={value === option}
            onChange={handleChange}
          />
          <label htmlFor={`${id}-${option}`}>{option}</label>
        </div>
      ))}
    </>
  );
};

export default Radio;
