import React, { useState } from "react";
import UploadPicture from "./UploadPicture";
import SelectProficiency from "./SelectProficiency";

const CreateAccount = () => {
    const [progress, setProgress] = useState(2);

    const [picture, setPicture] = useState();

    const handleSavingData = (data, type) => {

        switch (type) {
            case "Picture":
                console.log("Picture saved");
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
        2: <SelectProficiency/>
    }

    return (
        <React.Fragment>
            {screens[progress]}
        </React.Fragment>
    );
};

export default CreateAccount;