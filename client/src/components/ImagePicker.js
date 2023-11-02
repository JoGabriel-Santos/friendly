import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ handleSavingData }) => {
    const [imageUri, setImageUri] = useState();

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
    };

    useEffect(() => {
        if (imageUri) {
            handleSavingData("picture", imageUri);
        }
    }, [imageUri]);

    return (
        <TouchableOpacity
            style={styles.profileImageView}
            onPress={selectImageFromGallery}
        >
            <Image
                source={imageUri ? { uri: imageUri } : require("../utils/images/userPhoto.png")}
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