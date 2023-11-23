import React, { useState } from "react";
import UploadPicture from "./UploadPicture";
import SelectProficiency from "./SelectProficiency";
import OtherInformation from "./OtherInformation";

const CreateAccount = () => {
    const [progress, setProgress] = useState(3);

    const [picture, setPicture] = useState();
    const [proficiency, setProficiency] = useState();
    const [birthday, setBirthday] = useState();

    const handleSavingData = (data, type) => {

        switch (type) {
            case "Picture":
                console.log(data);
                break;

            case "Proficiency":
                console.log(data);
                break;

            case "Birthday":
                console.log("Birthday saved");
                break;
        }
    };

    const handleNext = () => {
        if (progress < 5) {
            setProgress(progress + 1);
        }
    };

    const screens = {
        1: <UploadPicture handleSavingData={handleSavingData} handleNext={handleNext}/>,
        2: <SelectProficiency handleSavingData={handleSavingData} handleNext={handleNext}/>,
        3: <OtherInformation handleSavingData={handleSavingData} handleNext={handleNext}/>
    }

    return (
        <React.Fragment>
            {screens[progress]}
        </React.Fragment>
    );
};

export default CreateAccount;