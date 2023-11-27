import React, { useState } from "react";
import UploadUserPicture from "./UploadUserPicture";
import SelectProficiency from "./SelectProficiency";
import OtherInformation from "./OtherInformation";

const CreateAccount = () => {
    const [progress, setProgress] = useState(1);

    const handleNext = () => {
        if (progress < 3) {
            setProgress(progress + 1);
        }
    };

    const screens = {
        1: <UploadUserPicture handleNext={handleNext}/>,
        2: <SelectProficiency handleNext={handleNext}/>,
        3: <OtherInformation/>
    }

    return (
        <React.Fragment>
            {screens[progress]}
        </React.Fragment>
    );
};

export default CreateAccount;