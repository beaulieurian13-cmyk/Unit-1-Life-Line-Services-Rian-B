import Input from "../ApplicantInput/Input";
import Radio from "../ApplicantInput/Radio";


const SupportNetwork = ({formData, handleChange}) => {
    return (
        <div className="SupportNetworkPage">
            <h1>Support Network</h1>
            <p>Please provide information about your support network:</p>
        <fieldset>
            <Radio
             id="liveWith"
             name="liveWith"
             label="Who do you currently live with?"
             options={["I live alone", "Spouse/Partner", "Family", "Roommate(s)", "other"]}
             value={formData.liveWith}
             handleChange={handleChange}
            />
             <Radio
             id="stableLiving"
             name="stableLiving"
             label="Is your current living situation stable and safe?"
             options={["Yes", "No", "I am not sure"]}
             value={formData.stableLiving}
             handleChange={handleChange}
            />
            <Input  
            id="emergencyName"
            label="Emergency Contact Name"
            type="text"
            value={formData.emergencyName}
            handleChange={handleChange}
            />
            <Input  
            id="emergencyPhone"
            label="Emergency Contact Phone Number"
            type="tel"
            value={formData.emergencyPhone}
            handleChange={handleChange}
            />

        </fieldset>
        
        
        </div>


    );
};

export default SupportNetwork;