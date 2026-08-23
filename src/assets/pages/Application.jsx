import ApplicantInfo from '../component/application/ApplicantInfo.jsx'
//import application from "../component/application.css"
//import ServiceDogReadiness from '../component/application/ServiceDogReadiness.jsx'
//import SupportNetwork from '../component/application/SupportNetwork'
//import Therapist from '../component/application/TherapistInfo'
import { Link } from "react-router"

const Application = () => {
    return (
        <div className="ApplicationPage">
            <h1>Application</h1>
              
             {/* <Routes> */}
        {/* <Route path="/" element={<ApplicantInfo/>}/> */}
        {/* <Route path="/servicedogreadiness" element={<ServiceDogReadiness/> }/> */}
        {/* <Route path="/supportnetwork" element={<SuppportNetwork />} /> */}
        {/* <Route path="/therapistinfo" element={<Therapistinfo />} /> */}
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      {/* </Routes> */}

            <ApplicantInfo />
        </div>
    )
}

export default Application