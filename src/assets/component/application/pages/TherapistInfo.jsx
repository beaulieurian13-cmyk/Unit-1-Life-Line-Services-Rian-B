import Input from "../form-structure/type/Input";
import Radio from "../form-structure/type/Radio";
import UploadFile from "../form-structure/UploadFile";
// TODO: add required to the each inupt
const TherapistInfo = ({ formData, handleChange }) => {
  return (
    <div className="TherapistInfoPage">
      <h2>Therapist Information</h2>
      <p>Please provide information about your therapist:</p>

      <fieldset className="radio-group">
        <Radio
          id="hasTherapist"
          name="hasTherapist"
          label="Have you been going consistently(2 or more time a month) to a trauma therapist for over a year?"
          options={["Yes", "No"]}
          value={formData.hasTherapist}
          handleChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <Input
          id="therapistName"
          label="Therapist Name"
          type="text"
          value={formData.therapistName}
          handleChange={handleChange}
        />
        <Input
          id="therapistPhone"
          label="Therapist Phone Number"
          type="tel"
          value={formData.therapistPhone}
          handleChange={handleChange}
        />
      </fieldset>
      <UploadFile handleChange={handleChange} />
    </div>
  );
};

export default TherapistInfo;
