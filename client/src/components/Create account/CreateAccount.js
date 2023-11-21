import React, { useState } from "react";
import UploadPicture from "./UploadPicture";

const CreateAccount = () => {
    const [progress, setProgress] = useState(1);

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
        1: <UploadPicture/>
    }

    return (
        <React.Fragment>
            {screens[progress]}
        </React.Fragment>
    );
};

export default CreateAccount;