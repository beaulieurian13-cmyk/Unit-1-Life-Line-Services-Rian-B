import InputErrorMessage from "../form-structure/InputErrorMessage";
import Radio from "../form-structure/type/Radio";
import TextArea from "../form-structure/type/TextArea";

const ServiceDogReadiness = ({ formData, handleChange, fieldErrors }) => {
  return (
    <div className="ServiceDogReadinessPage">
      <h3>Service Dog Readiness</h3>
      <p>Please provide information about your service dog's readiness:</p>

      <fieldset>
        <div className="radio-group">
          <Radio
            id="ownedDog"
            name="ownedDog"
            label="Have you ever owned or cared for a dog before?"
            options={["Yes", "No"]}
            value={formData.ownedDog}
            required
            handleChange={handleChange}
          />          
          <InputErrorMessage       
           hasError={!!fieldErrors.ownedDog} 
           msg={fieldErrors.ownedDog}
           />
          <Radio
            id="dailyCare"
            name="dailyCare"
            label="Are you willing and able to provide daily care for a service dog?"
            options={["Yes", "No", "I am not Sure"]}
            value={formData.dailyCare}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.dailyCare} 
           msg={fieldErrors.dailyCare}
           />
          <Radio
            id="participateTraining"
            name="participateTraining"
            label="Are you willing to participate in service dog training and follow the training instructions provided by our organization?"
            options={["Yes", "No"]}
            value={formData.participateTraining}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.participateTraining} 
           msg={fieldErrors.participateTraining}
           />
          <Radio
            id="commitment"
            name="commitment"
            label="Are you willing to continue training and practicing with your service dog after you receive your dog?"
            options={["Yes", "No"]}
            value={formData.commitment}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.commitment} 
           msg={fieldErrors.commitment}
           />
          <Radio
            id="understandingCommitment"
            name="understandingCommitment"
            label="Do you understand that having a service dog is a long-term commitment?"
            options={["Yes", "No", "I would like more Information"]}
            value={formData.understandingCommitment}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.understandingCommitment} 
           msg={fieldErrors.understandingCommitment}
           />
          <Radio
            id="homeCommitment"
            name="homeCommitment"
            label="Does your current home allow you to have a dog?"
            options={["Yes", "No"]}
            value={formData.homeCommitment}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.homeCommitment} 
           msg={fieldErrors.homeCommitment}
           />
          <Radio
            id="dogCare"
            name="dogCare"
            label="Are you able to provide your service dog with regular food, water, exercise, grooming, and veterinary care?"
            options={["Yes", "No", "I may need assistance with this"]}
            value={formData.dogCare}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.dogCare} 
           msg={fieldErrors.dogCare}
           />
          <Radio
            id="householdSupport"
            name="householdSupport"
            label="Does everyone in your household understand and support your decision to have a service dog?"
            options={["Yes", "No", "I live alone"]}
            value={formData.householdSupport}
            required
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.householdSupport} 
           msg={fieldErrors.householdSupport}
           />
          <Radio
            id="rulefollowing"
            name="rulefollowing"
            label="Are you willing to follow rules regarding your service dog's behavior, health, safety, and public access?"
            options={["Yes", "No"]}
            value={formData.rulefollowing}
            required  
            handleChange={handleChange}
          />
          <InputErrorMessage 
           hasError={!!fieldErrors.rulefollowing} 
           msg={fieldErrors.rulefollowing}
           />
        </div>
      </fieldset>

      <fieldset className="text-area">
        <h4>Short Answer Questions</h4>
        <TextArea
          id="biggestChallenge"
          label="What do you think will be the biggest challenge for you when caring for and working with a service dog?"
          value={formData.biggestChallenge}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.biggestChallenge} 
         msg={fieldErrors.biggestChallenge}
         />
        <br></br>
        <TextArea
          id="succeccfulSupport"
          label="What support do you think you will need to be successful with your service dog?"
          value={formData.succeccfulSupport}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.succeccfulSupport} 
         msg={fieldErrors.succeccfulSupport}
         />
        <br></br>
        <TextArea
          id="receiveReady"
          label="Why do you feel you are ready to receive a service dog at this point in your journey?"
          value={formData.receiveReady}
          required
          handleChange={handleChange}
        />
        <InputErrorMessage 
         hasError={!!fieldErrors.receiveReady} 
         msg={fieldErrors.receiveReady}
         />
      </fieldset>
    </div>
  );
};

export default ServiceDogReadiness;
