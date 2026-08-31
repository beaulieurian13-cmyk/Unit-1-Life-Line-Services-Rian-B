const InputErrorMessage = ({ hasErrors, msg }) => {
  return <>{hasErrors && <p className="error-message">{msg}</p>}</>;
};

export default InputErrorMessage;
