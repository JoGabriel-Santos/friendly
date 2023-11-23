import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImagePicker from "../ImagePicker";

const UploadPicture = ({ handleSavingData, handleNext }) => {
    const [userImage, setUserImage] = useState();

    const handleSavingImage = (newUserImage) => {

        setUserImage(newUserImage);
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.createAccountView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>
                        Choose a photo
                    </Text>

                    <Text style={styles.sloganText}>
                        On Friendly, everyone has a profile photo which clearly shows their face
                    </Text>
                </View>

                <ImagePicker handleSavingImage={handleSavingImage}/>

                <Text style={styles.descriptionText}>
                    Not sure what we mean? Here are a few good profile photo examples from our community
                </Text>

                <View style={styles.communityPictures}>
                    <Image
                        source={require("../../utils/images/background.png")}
                        style={styles.picture}
                    />

                    <Image
                        source={require("../../utils/images/background.png")}
                        style={styles.picture}
                    />

                    <Image
                        source={require("../../utils/images/background.png")}
                        style={styles.picture}
                    />
                </View>
            </View>

            <View style={styles.nextScreenView}>
                <TouchableOpacity style={styles.nextScreen} onPress={() => {
                    handleSavingData(userImage, "Picture");
                    handleNext();
                }}>
                    <Text style={styles.nextScreenText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        paddingHorizontal: 20,
    },
    createAccountView: {
        alignItems: "center",
        paddingVertical: 50,
    },
    header: {
        alignItems: "center",
    },
    authText: {
        color: "#7c46fa",
        fontFamily: "nunito-extraBold",
        fontSize: 35,
        marginVertical: 30,
    },
    sloganText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 20,
        maxWidth: "85%",
        textAlign: "center",
    },
    descriptionText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 16,
        marginTop: 180,
        maxWidth: "85%",
        textAlign: "center",
    },
    communityPictures: {
        flexDirection: "row",
        gap: 30,
        justifyContent: "space-between",
        marginTop: 20,
    },
    picture: {
        borderRadius: 5,
        height: 60,
        width: 60,
    },
    nextScreenView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    nextScreen: {
        backgroundColor: "#7c46fa",
        borderRadius: 100,
        marginBottom: 30,
        padding: 18,
        width: "100%",
    },
    nextScreenText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
});

export default UploadPicture;