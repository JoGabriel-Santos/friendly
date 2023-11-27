import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import UploadUserPicture from "./UploadUserPicture";
import SelectProficiency from "./SelectProficiency";

const CreateAccount = () => {
    const navigation = useNavigation();

    const [progress, setProgress] = useState(1);

    const handleNext = () => {
        if (progress <= 2) {
            setProgress(progress + 1);
        }
    };

    const screens = {
        1: <UploadUserPicture handleNext={handleNext}/>,
        2: <SelectProficiency handleNext={handleNext}/>,
    }

    return (
        <React.Fragment>
            {screens[progress]}

            {
                progress === 3 ? navigation.navigate("OtherInformation") : null
            }
        </React.Fragment>
    );
};

export default CreateAccount;