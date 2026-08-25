import ApplicantInfo from '../component/application/ApplicantInfo.jsx';
//import application from "../component/application.css"
//import ServiceDogReadiness from '../component/application/ServiceDogReadiness.jsx'
//import SupportNetwork from '../component/application/SupportNetwork'
//import Therapist from '../component/application/TherapistInfo'
import { useState } from "react";

const blankFormData = { 
       firstName: '', 
       lastName: '',
       prefrredName:'',
        
       phone: "",
       email: "",
       preferredContact: "",

       address: "",
       city: "",
       state: "",
       zipCode: "",

       livingSituation: "",
       stableHousing: ""

       hasSupportNetwork: false,
       emergencyContactName: "",

   
       hasTherapist: false,
       therapistName: "",
       therapistPhone: "",
};

const Application = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({...blankFormData});
      
    const[hasError, setHasError] = useState(false);

    const isVaid = () => {
        return data.firstName.trim() !== '' && data.lastName.trim() !== '' && data.email.trim() !== '' && Number(data.phone);

    function handleChange = (event) => {
        const { id, value } = event.target
        setFormData({..formData, [id]: value });

    }


    return (

        <div className="ApplicationPage">
            <h2>Application</h2>
              
       

            <ApplicantInfo
            formData={formData}
            setFormData={setFormData}
            />
        </div>
    );
};

export default Application