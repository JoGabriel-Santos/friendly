import React, { useState } from "react";
import UploadPicture from "./UploadPicture";
import SelectProficiency from "./SelectProficiency";
import SelectBirthday from "./SelectBirthday";

const CreateAccount = () => {
    const [progress, setProgress] = useState(2);

    const [picture, setPicture] = useState();
    const [proficiency, setProficiency] = useState();
    const [birthday, setBirthday] = useState();

    const handleSavingData = (data, type) => {

        switch (type) {
            case "Picture":
                console.log("Picture saved");
                break;

            case "Proficiency":
                console.log("Proficiency saved");
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
        1: <UploadPicture/>,
        2: <SelectProficiency/>,
        3: <SelectBirthday/>
    }

    return (
        <React.Fragment>
            {screens[progress]}
        </React.Fragment>
    );
};

export default CreateAccount;