import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent = ({ handleSavingImage }) => {
    const [imageBase64, setImageBase64] = useState();

    const selectImageFromGallery = async () => {
        const image = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowEditing: true,
            base64: true,
            quality: 1,
        });

        if (!image.cancelled) {
            setImageBase64(image.assets[0].base64);
        }
    };

    useEffect(() => {
        if (imageBase64) {
            handleSavingImage(`data:image/jpeg;base64,${imageBase64}`);
        }
    }, [imageBase64]);

    return (
        <TouchableOpacity
            style={styles.profileImageView}
            onPress={selectImageFromGallery}
        >
            <Image
                source={
                    imageBase64
                        ? { uri: `data:image/jpeg;base64,${imageBase64}` }
                        : require("../utils/images/addImage.png")
                }
                style={styles.profileImage}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    profileImageView: {
        alignItems: "center",
        flex: 1,
        marginTop: 50,
        position: "relative",
    },
    profileImage: {
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 2,
        height: 180,
        position: "absolute",
        top: "60%",
        width: 180,
    },
});

export default ImagePickerComponent;
