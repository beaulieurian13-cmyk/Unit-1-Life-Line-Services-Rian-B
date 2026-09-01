const FormSection = ({ classes, title, children }) => {
  return (
    <fieldset className={`form-section ${classes}`}>
      <h3>{title}</h3>
      {children}
    </fieldset>
  );
};

export default FormSection;
