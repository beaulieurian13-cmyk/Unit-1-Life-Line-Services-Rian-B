import ApplicantItem from "./ApplicantInput/ApplicationItem"
import Input from "./ApplicantInput/Input"

const ApplicantInfo = ({formData, handleChange}) => {
    return (
        <div className="applicant-info"> 
            <h2>Applicant Information</h2>
            <p>Please fill out the following information:</p>
            <form>
                <ApplicantItem classes="first-name-item">
                    <Input
                       id="firstName"
                       label="First Name"
                       type="text"
                       value={}
                       required={true} 
                       handleChange={}                                  
                    />
                </ApplicantItem>

            </form>
        </div>
    )
}

export default ApplicantInfo