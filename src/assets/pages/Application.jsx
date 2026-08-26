import ApplicantInfo from '../component/application/ApplicantInfo.jsx';
import Button from '../component/application/ApplicantInput/FormButton.jsx';
//import application from "../component/application.css"
import ServiceDogReadiness from '../component/application/ServiceDogReadiness.jsx'
import SupportNetwork from '../component/application/SupportNetwork'
import TherapistInfo from '../component/application/TherapistInfo';
import { useState } from "react";

const blankFormData = { 
       firstName: '', 
       lastName: '',
       preferredName:'',
        
       phone: "",
       email: "",
       preferredContact: "",

       address: "",
       city: "",
       state: "",
       zipCode: "",

       livingSituation: "",
       stableHousing: "",

       hasSupportNetwork: false,
       emergencyContactName: "",
   
       hasTherapist: false,
       therapistName: "",
       therapistPhone: "",
};

const Application = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({...blankFormData});
      
    const[hasError, setHasError] = useState(false);

    const isValid = () => {
        return Object.keys(blankFormData).every((field) => {
          const value = formData[field];
          return typeof value === "string" ? value.trim() !== "" : true;
    });  
    }
            
    const handleChange = (event) => {
        const { id, value } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
             [id]: value,
             })
            );

    };

    const isLastStep = currentStep === 3;

    return (

        <div className="ApplicationPage">
            <h2>Application</h2>
          
            {currentStep === 0 &&<ApplicantInfo 
            setCurrentStep={setCurrentStep}
            formData={formData}
            handleChange={handleChange}
            />}
            {currentStep === 1 &&<ServiceDogReadiness
            formData={formData}
            handleChange={handleChange}
            />}
            {currentStep === 2 &&<SupportNetwork
            formData={formData}
            handleChange={handleChange}                
            />}
            {currentStep === 3 &&<TherapistInfo
            formData={formData}
            handleChange={handleChange}                
            />}
            <div className="button-container">
                {currentStep > 0 && (
                    <Button label="Back" handleClick={() => 
                        setCurrentStep(currentStep - 1)} />
            )}

            {isLastStep ? (
                    <Button label="Submit" type="submit" 
                    handleClick={handleSubmit} />
            ) : (
                    <Button label="Next" handleClick={() => 
                        setCurrentStep(currentStep + 1)} />
            )}
            </div>
          
        </div>
    );
};

export default Application