const FormSection = ({ classes, title, children }) => {
  return (
    // TODO: add to each form page and each "fieldset"
    <fieldset className={`form-section ${classes}`}>
      <h3>{title}</h3>
      {children}
    </fieldset>
  );
};

export default FormSection;
