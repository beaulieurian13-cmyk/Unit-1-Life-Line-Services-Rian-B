import { useState } from "react";
// import Button from "./FormButton";

const UploadFile = ({ handleChange }) => {
  const [fileUpload, setFileUpload] = useState(false);

  const handleFileChange = (event) => {
    handleChange(event);
    setFileUpload(true);
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

        {fileUpload && <p>Letter Has Been Uploaded</p>}
      </fieldset>
    </div>
  );
};

export default UploadFile;
// TODO: unit2
// {/* <Button
// id="delete"
// type="button"
// classes={buttons}
// handleClick={}
// />
// {!fileUpload && <p>File delete, Please upload a new file.</p>}
// */}
