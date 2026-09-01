import InputErrorMessage from "../form-structure/InputErrorMessage";
import FormSection from "../form-structure/styling/FormSection";
import Input from "../form-structure/type/Input";
import Radio from "../form-structure/type/Radio";
import UploadFile from "../form-structure/UploadFile";

const TherapistInfo = ({ formData, handleChange, fileUpload, setFileUpload, fieldErrors }) => {
  return (
    <FormSection
     classes="TherapistInfoPage"
     title="Therapist Information">

      <h3>Therapist History</h3>
      <p>Please provide information about your therapist:</p>

      <fieldset className="radio-group">
        <Radio
          id="hasTherapist"
          name="hasTherapist"
          label="Have you been going consistently(2 or more time a month) to a trauma therapist for over a year?"
          options={["Yes", "No"]}
          value={formData.hasTherapist}  
          required   
          handleChange={handleChange}
        />
        <InputErrorMessage
         hasError={!!fieldErrors.hasTherapist}
         msg={fieldErrors.hasTherapist}
         />
      </fieldset>
      <fieldset>
        <Input
          id="therapistName"
          label="Therapist Name"
          type="text"
          value={formData.therapistName}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage
         hasError={!!fieldErrors.therapistName}
         msg={fieldErrors.therapistName}
         />
        <Input
          id="therapistPhone"
          label="Therapist Phone Number"
          type="tel"
          value={formData.therapistPhone}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage
         hasError={!!fieldErrors.therapistPhone}
         msg={fieldErrors.therapistPhone}
         />
      </fieldset>
      <UploadFile 
       handleChange={handleChange} 
       fileUpload={fileUpload}
       setFileUpload={setFileUpload}
       />
       <InputErrorMessage
        hasError={!!fieldErrors.therapistLetter}
        msg={fieldErrors.therapistLetter}
      />
    </FormSection>
  );
};

export default TherapistInfo;
