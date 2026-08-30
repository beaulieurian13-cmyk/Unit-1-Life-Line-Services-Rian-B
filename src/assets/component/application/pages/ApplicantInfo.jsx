import FormSection from "../ApplicantInput/styling/FormSection";

import Input from "../ApplicantInput/type/Input";

const ApplicantInfo = ({ formData, handleChange, }) => {
  return (
    <div>
       <h2>Applicant Information</h2>
      
      <FormSection
        title= "Please fill out the following information:"
        classes="input"> 
      
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
        </FormSection>
      </div>
  
  );
};

export default ApplicantInfo;
