import InputErrorMessage from "../form-structure/InputErrorMessage";
import FormSection from "../form-structure/styling/FormSection";

import Input from "../form-structure/type/Input";

const ApplicantInfo = ({ formData, handleChange, fieldErrors }) => {
  return (
    <div className="applicant-info">
      <h3>Applicant Information</h3>

      <FormSection
        title="Please fill out the following information:"
        classes="input"
      >
        <Input
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          required={true}
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.firstName} 
         msg={fieldErrors.firstName}
         />
        
        <Input
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.lastName} 
         msg={fieldErrors.lastName}
         />
        <Input
          id="preferredName"
          label="Preferred Name"
          type="text"
          value={formData.preferredName}
          handleChange={handleChange}
        />
         <Input
          id="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.phone} 
         msg={fieldErrors.phone}
         />
        <Input
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.email} 
         msg={fieldErrors.email}
         />
        <Input
          id="address"
          label="Street Address"
          type="text"
          value={formData.address}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.address} 
         msg={fieldErrors.address}
         />
        <Input
          id="city"
          label="City"
          type="text"
          value={formData.city}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.city} 
         msg={fieldErrors.city}
         />
        <Input
          id="state"
          label="State"
          type="text"
          value={formData.state}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.state} 
         msg={fieldErrors.state}
         />
        <Input
          id="zipCode"
          label="Zip Code"
          type="text"
          value={formData.zipCode}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.zipCode} 
         msg={fieldErrors.zipCode}
         />
      </FormSection>
    </div>
  );
};

export default ApplicantInfo;
