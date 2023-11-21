import React, { useState } from "react";
import UploadPicture_1 from "./UploadPicture_1";

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

    const handleBack = () => {
        if (progress > 1) {
            setProgress(progress - 1);
        }
    };

    const handleNext = () => {
        if (progress < 5) {
            setProgress(progress + 1);
        }
    };

    const screens = {
        1: <UploadPicture_1/>
    }

    return (
        <React.Fragment>
            {screens[progress]}
        </React.Fragment>
    );
};

export default CreateAccount;