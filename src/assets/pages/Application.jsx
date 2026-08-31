import ApplicantInfo from "../component/application/pages/ApplicantInfo.jsx";
import Button from "../component/application/form-structure/FormButton.jsx";
//import application from "../component/application.css"
import ServiceDogReadiness from "../component/application/pages/ServiceDogReadiness.jsx";
import SupportNetwork from "../component/application/pages/SupportNetwork.jsx";
import TherapistInfo from "../component/application/pages/TherapistInfo.jsx";
import { useState } from "react";
import InputErrorMessage from "../component/application/form-structure/InputErrorMessage.jsx";

const blankFormData = {
  //applicantinfo
  firstName: "",
  lastName: "",
  preferredName: "",

  phone: "",
  email: "",
  preferredContact: "",

  address: "",
  city: "",
  state: "",
  zipCode: "",
  //serviceDogReadiness
  ownedDog: "",
  dailyCare: "",
  participateTraining: "",
  commitment: "",
  understandingCommitment: "",
  homeCommitment: "",
  dogCare: "",
  householdSupport: "",
  rulefollowing: "",
  biggestChallenge: "",
  succeccfulSupport: "",
  receiveReady: "",

  //supportNetwork
  liveWith: "",
  stableLiving: "",
  emergencyName: "",
  emergencyPhone: "",
  //theripistinfo
  hasTherapist: "",
  therapistName: "",
  therapistPhone: "",
};
// TODO: step fields and use it
const stepFields = {
  0: [
    "firstName",
    "lastName",
    "phone",
    "email",
    "address",
    "city",
    "state",
    "zipCode",
  ],

  1: [
    "ownedDog",
    "dailyCare",
    "participateTraining",
    "commitment",
    "understandingCommitment",
    "homeCommitment",
    "dogCare",
    "householdSupport",
    "rulefollowing",
    "biggestChallenge",
    "succeccfulSupport",
    "receiveReady",
  ],

  2: ["liveWith", "stableLiving", "emergencyName", "emergencyPhone"],

  3: ["hasTherapist", "therapistName", "therapistPhone"],
};

const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({ ...blankFormData });

  const [hasErrors, setHasErrors] = useState(false);

  const isValid = (step) => {
    return stepFields[step].every((field) => {
      const value = formData[field];
      return typeof value === "string" ? value.trim() !== "" : true;
    });
  };

  //TODO:finsih error set up
  //TODO:fix isvalid by adding array for each page
  // const isValid = () => {
  //     return Object.keys(blankFormData).every((field) => {
  //       const value = formData[field];
  //       return typeof value === "string" ? value.trim() !== "" : true;
  // });
  // }

  const handleChange = (event) => {
    const { id, name, value } = event.target;
    const key = name || id;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleNext = () => {
    if (isValid(currentStep)) {
      setHasErrors(false);
      setCurrentStep(currentStep + 1);
    } else {
      setHasErrors(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid(currentStep)) {
      setHasErrors(false);
      setFormData(blankFormData);
    } else {
      setHasErrors(true);
    }
  };

  const isLastStep = currentStep === 3;

  return (
    <main className="ApplicationPage">
      <h2>Application</h2>
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <ApplicantInfo
            setCurrentStep={setCurrentStep}
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {currentStep === 1 && (
          <ServiceDogReadiness
            formData={formData}
            handleChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <SupportNetwork formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <TherapistInfo formData={formData} handleChange={handleChange} />
        )}
        <div className="button-container">
          {currentStep > 0 && (
            <Button
              label="Back"
              type="button"
              classes="buttons"
              handleClick={() => setCurrentStep(currentStep - 1)}
            />
          )}

          {isLastStep ? (
            <Button
              label="Submit"
              type="submit"
              classes="buttons"
              handleClick={handleSubmit}
            />
          ) : (
            <Button
              label="Next"
              type="button"
              classes="buttons"
              handleClick={handleNext}
            />
          )}
          <InputErrorMessage
            hasErrors={hasErrors}
            msg="Please fill out all required fields before continuing."
          />
        </div>
      </form>
    </main>
  );
};

export default Application;
