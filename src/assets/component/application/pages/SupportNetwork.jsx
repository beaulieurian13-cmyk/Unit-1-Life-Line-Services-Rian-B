import InputErrorMessage from "../form-structure/InputErrorMessage";
import Input from "../form-structure/type/Input";
import Radio from "../form-structure/type/Radio";

const SupportNetwork = ({ formData, handleChange, fieldErrors }) => {
  return (
    <div className="SupportNetworkPage">
      <h3>Support Network</h3>
      <p>Please provide information about your support network:</p>
      <fieldset>
        <Radio
          id="liveWith"
          name="liveWith"
          label="Who do you currently live with?"
          options={[
            "I live alone",
            "Spouse/Partner",
            "Family",
            "Roommate(s)",
            "other",
          ]}
          value={formData.liveWith}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage
         hasError={!!fieldErrors.liveWith} 
         msg={fieldErrors.liveWith}
         />
        <Radio
          id="stableLiving"
          name="stableLiving"
          label="Is your current living situation stable and safe?"
          options={["Yes", "No", "I am not sure"]}
          value={formData.stableLiving}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage
         hasError={!!fieldErrors.stableLiving} 
         msg={fieldErrors.stableLiving}
         />
        <Input
          id="emergencyName"
          label="Emergency Contact Name"
          type="text"
          value={formData.emergencyName}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage
         hasError={!!fieldErrors.emergencyName}
         msg={fieldErrors.emergencyName}
         />
        <Input
          id="emergencyPhone"
          label="Emergency Contact Phone Number"
          type="tel"
          value={formData.emergencyPhone}
          required
          handleChange={handleChange}
        />       
        <InputErrorMessage
         hasError={!!fieldErrors.emergencyPhone}
         msg={fieldErrors.emergencyPhone}
         />
      </fieldset>
    </div>
  );
};

export default SupportNetwork;
