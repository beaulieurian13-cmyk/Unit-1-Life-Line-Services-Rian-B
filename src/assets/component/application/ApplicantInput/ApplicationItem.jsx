const ApplicantItem = ({ classes, children }) => {
  return <div className={`applicant-item ${classes}`}>{children}</div>;
};

export default ApplicantItem;
