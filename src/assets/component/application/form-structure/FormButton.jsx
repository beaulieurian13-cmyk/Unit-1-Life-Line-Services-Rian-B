const Button = ({ id, type, label, classes, handleClick }) => {
  return (
    <>
      <button
        id={`${id}-button`}
        type={type}
        className={classes}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
    // TODO: add button to delete upload
  );
};

export default Button;
