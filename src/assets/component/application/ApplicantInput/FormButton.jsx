const Button = ({ id, type, label, classes, handleClick }) => {
    return (
        <button id={`${id}-button`} type={type} className={classes} onCLick={handleClick}>
            {label}
        </button>
    );
};

export default Button;