import { useState } from "react";

 
const UploadFile = ({handleChange}) => {

    const [fileUpload, setFileUpload] = useState(false);

    const handleFileChange = (event) => {
        handleChange(event);
        setFileUpload(true);
           console.log("fileUploaded is now:", true); 
    };
         
    
    return ( 
        <div>
         <p>Please submit your letter from your Therapist </p>
         <fieldset>
            <input 
            id="therapistLetter"
            name="therapistLetter"
            type="file"
            onChange={handleFileChange}
            />

            {fileUpload && <p>Letter Uploaded</p>}  
           
        </fieldset> 
        </div>
       
    );
};

export default UploadFile;