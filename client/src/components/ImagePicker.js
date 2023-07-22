import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = () => {
    const [imageUri, setImageUri] = useState("https://img.freepik.com/free-icon/user_318-159711.jpg");

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