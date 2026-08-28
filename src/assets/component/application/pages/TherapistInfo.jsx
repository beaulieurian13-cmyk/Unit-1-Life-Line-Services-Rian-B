import Input from "../ApplicantInput/Input";
import Radio from "../ApplicantInput/Radio";


const TherapistInfo = ({formData, handleChange}) => {
  return (
    <div className="TherapistInfoPage">
      <h1>Therapist Information</h1>
      <p>Please provide information about your therapist:</p>
   
    <fieldset>
    <Radio
    id="hasTherapist"
    name="hasTherapist"
    label="Have you been going consistently(2 or more time a month) to a trauma therapist for over a year?"
    options={["Yes","No"]}
    value={formData.hasTherapist}
    handleChange={handleChange}
    />
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
 </div>
  );
};

export default TherapistInfo;
