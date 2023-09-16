import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ handleSavingData, prevSelectedPicture }) => {
    const [imageUri, setImageUri] = useState("");

    useEffect(() => {
        if (prevSelectedPicture === "") {
            setImageUri(require("../utils/images/userPhoto.png"));

        } else {
            setImageUri(prevSelectedPicture);
        }

    }, [prevSelectedPicture]);

    const selectImageFromGallery = async () => {
        const image = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowEditing: true,
            base64: true,
            quality: 1,
        });

        if (!image.canceled) {
            setImageUri(image.assets[0].uri);
        }

        handleSavingData("picture", imageUri);
    };

    return (
        <TouchableOpacity
            style={styles.profileImageView}
            onPress={selectImageFromGallery}
        >
            <Image
                source={{ uri: imageUri }}
                style={styles.profileImage}
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    profileImageView: {
        alignItems: "center",
        flex: 1,
        position: "relative",
    },
    profileImage: {
        borderRadius: 100,
        height: 110,
        position: "absolute",
        top: "64%",
        width: 110,
    },
});

export default ImagePickerComponent;