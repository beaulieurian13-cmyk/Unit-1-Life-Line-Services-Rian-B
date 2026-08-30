import ApplicantInfo from '../component/application/pages/ApplicantInfo.jsx';
import Button from '../component/application/ApplicantInput/FormButton.jsx';
//import application from "../component/application.css"
import ServiceDogReadiness from '../component/application/pages/ServiceDogReadiness.jsx'
import SupportNetwork from '../component/application/pages/SupportNetwork.jsx'
import TherapistInfo from '../component/application/pages/TherapistInfo.jsx';
import { useState } from "react";
//TODO: Update blankFormData with ServiceDogReadiness Input IDs 
//TODO: Update blankFormData with supportNetwork Input IDs 
//TODO: Update blankFormData with theripistinfo Input IDs 

const blankFormData = { 
    //applicantinfo
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
       emergencyPhone:"",
   //theripistinfo
       hasTherapist: "",
       therapistName: "",
       therapistPhone: "",
};

const Application = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({...blankFormData});
      
    const[hasError, setHasError] = useState(false);
    //TODO:finsih error set up
//TODO:fix isvalid by adding array for each page
    // const isValid = () => {
    //     return Object.keys(blankFormData).every((field) => {
    //       const value = formData[field];
    //       return typeof value === "string" ? value.trim() !== "" : true;
    // });  
    // }
    //TODO:        
    const handleChange = (event) => {
        const { id, name, value } = event.target;
        const key = name || id;
        setFormData(prevFormData => ({
            ...prevFormData,
             [key]: value,
             })
            );

    };


    

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(blankFormData);
     }

    const isLastStep = currentStep === 3;

    return (

        <main className="ApplicationPage">
            <h2>Application</h2>
          <form onSubmit={handleSubmit}>
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
                    <Button 
                    label="Back"
                    type="button" 
                    handleClick={() => 
                        setCurrentStep(currentStep -  1)} />
            )}

            {isLastStep ? (
                    <Button 
                    label="Submit" 
                    type="submit" 
                    handleClick={handleSubmit} />
            ) : (
                    <Button  
                    label="Next"
                    type="button"
                    handleClick={() => 
                        setCurrentStep(currentStep + 1)} />
            )}
            </div>
          </form>
           
        </main>
          
            );
};

export default Application;