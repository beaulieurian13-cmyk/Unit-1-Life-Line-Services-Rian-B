import ApplicantItem from "../ApplicantInput/ApplicationItem";
import Input from "../ApplicantInput/Input";

const ApplicantInfo = ({ formData, handleChange, setCurrentStep }) => {
  return (
    <div className="applicant-info">
      <h2>Applicant Information</h2>
      <p>Please fill out the following information:</p>
      <fieldset>
        <ApplicantItem classes="first-name-item">
          <Input
            id="firstName"
            label="First Name"
            type="text"
            value={formData.firstName}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            value={formData.lastName}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="preferredName"
            label="Preferred Name"
            type="text"
            value={formData.preferredName}
            required={false}
            handleChange={handleChange}
          />
          <Input
            id="phone"
            label="Phone Number"
            type="number"
            value={formData.phone}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="address"
            label="Street Address"
            type="text"
            value={formData.address}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="city"
            label="City"
            type="text"
            value={formData.city}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="state"
            label="State"
            type="text"
            value={formData.state}
            required={true}
            handleChange={handleChange}
          />
          <Input
            id="zipCode"
            label="Zip Code"
            type="text"
            value={formData.zipCode}
            required={true}
            handleChange={handleChange}
          />
        </ApplicantItem>
      </fieldset>
    </div>
  );
};

export default ApplicantInfo;
