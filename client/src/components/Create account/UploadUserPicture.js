import React, { useCallback, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from "../ImagePicker";
import * as API from "../../api/index";

const UploadUserPicture = ({ handleNext }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userImage, setUserImage] = useState();

    const fetchUserInfo = useCallback(() => {
        const getUserInfo = async () => {
            try {
                const user = await AsyncStorage.getItem("userInfo");
                const userInfoJSON = JSON.parse(user);
                setUserInfo(userInfoJSON);

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        getUserInfo();
    }, []);

    useFocusEffect(fetchUserInfo);

    const handleSavingImage = (newUserImage) => {
        setUserImage(newUserImage);
    };

    const handleSubmitUserData = async () => {
        try {
            await API.alterUserData({ userEmail: userInfo.email, updatedData: { "picture": userImage } });

        } catch (error) {
            console.log(error.response);
        }
    };

    const isButtonClickable = !!userImage;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.createAccountView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>Choose a photo</Text>
                    <Text style={styles.sloganText}>
                        On Friendly, everyone has a profile photo which clearly shows their face
                    </Text>
                </View>
            </View>

            <ImagePicker handleSavingImage={handleSavingImage}/>

            <View style={styles.createAccountPhotos}>
                <Text style={styles.descriptionText}>
                    Not sure what we mean? Here are a few good profile photo examples from our community
                </Text>
                <View style={styles.communityPictures}>
                    <Image source={require("../../utils/images/background.png")} style={styles.picture}/>
                    <Image source={require("../../utils/images/background.png")} style={styles.picture}/>
                    <Image source={require("../../utils/images/background.png")} style={styles.picture}/>
                </View>
            </View>

            <View style={styles.nextScreenView}>
                {isButtonClickable ? (
                    <TouchableOpacity
                        style={styles.nextScreen}
                        onPress={() => {
                            handleSubmitUserData();
                            handleNext();
                        }}
                    >
                        <Text style={styles.nextScreenText}>Continue</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={[styles.nextScreen, { backgroundColor: "#A9A9A9" }]}>
                        <Text style={styles.nextScreenText}>Continue</Text>
                    </View>
                )}
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
        height: 100,
        paddingTop: 50,
    },
    createAccountPhotos: {
        alignItems: "center",
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

export default UploadUserPicture;