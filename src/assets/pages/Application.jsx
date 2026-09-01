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
  const [fileUpload, setFileUpload] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

 

  const isBlank = (value) => typeof value === "string" && value.trim() === "";

  const isValidPhone = (value) => /^\d{3}-?\d{3}-?\d{4}$/.test(value.trim());

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const isValidZip = (value) => /^\d{5}$/.test(value.trim());

  const phoneFields = ["phone", "therapistPhone", "emergencyPhone"];
  const shortAnswerFields = ["biggestChallenge", "succeccfulSupport", "receiveReady"];

const getStepErrors = (step) => {
    const errors = {};

    stepFields[step].forEach((field) => {
        const value = formData[field];

        if (isBlank(value)) {
            errors[field] = "This field is required";
            return;
        }

        if (phoneFields.includes(field) && !isValidPhone(value)) {
            errors[field] = "Please enter a valid phone number (e.g. 618-920-1742)";
            return;
        }

        if (field === "email" && !isValidEmail(value)) {
            errors[field] = "Please enter a valid email address";
            return;
        }

        if (field === "zipCode" && !isValidZip(value)) {
            errors[field] = "Please enter a valid 5-digit zip code";
            return;
        }

        if (shortAnswerFields.includes(field)) {
            const length = value.trim().length;
            if (length < 50) {
                errors[field] = `Please write at least 50 characters (currently ${length})`;
            } else if (length > 500) {
                errors[field] = `Please keep your answer under 500 characters (currently ${length})`;
            }
        }
    });

    if (step === 3 && !fileUpload) {
        errors.therapistLetter = "Please upload a letter from your therapist";
    }

    return errors;
};

 const handleChange = (event) => {
    const { id, name, value } = event.target;
    const key = name || id;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleNext = () => {
    const errors = getStepErrors(currentStep);

    if (Object.keys(errors).length === 0) {
        setFieldErrors({});
        setCurrentStep((prevStep) => prevStep + 1);
    } else {
        setFieldErrors(errors);
    }
};

 const handleSubmit = (event) => {
    event.preventDefault();
    const errors = getStepErrors(currentStep);

    if (Object.keys(errors).length === 0) {
        setFieldErrors({});
        setFormData(blankFormData);
        setFileUpload(false);
        setCurrentStep(0);
    } else {
        setFieldErrors(errors);
    }
};

  const isLastStep = currentStep === 3;

  return (
    <section className="ApplicationPage">
      <h2>Application</h2>
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <ApplicantInfo            
            formData={formData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
            
          />
        )}
        {currentStep === 1 && (
          <ServiceDogReadiness
            formData={formData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
          />
        )}
        {currentStep === 2 && (
          <SupportNetwork           
          formData={formData} 
          handleChange={handleChange}
          fieldErrors={fieldErrors}
           />
        )}
        {currentStep === 3 && (
          <TherapistInfo 
          formData={formData} 
          handleChange={handleChange}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
          fieldErrors={fieldErrors}
           />
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
          
        </div>
      </form>
    </section>
  );
};

export default Application;
