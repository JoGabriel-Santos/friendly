import React, { useCallback, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Calendar from "../Calendar";
import Gender from "../Gender";
import * as API from "../../api";

const OtherInformation = () => {
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState(null);
    const [userData, setUserData] = useState({
        birthday: "",
        gender: "",
        topics: "",
        description: "",
    });

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

    const handleSavingInformation = (name, value) => {
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmitUserData = async () => {
        try {
            await API.alterUserData({
                userEmail: userInfo.email, updatedData: {
                    "birthday": userData.birthday,
                    "gender": userData.gender,
                    "topics": userData.topics,
                    "description": userData.description
                }
            });

            const { data } = await API.fetchUserData(userInfo.email);

            await AsyncStorage.setItem("userInfo", JSON.stringify(data));
            navigation.navigate("Home");

        } catch (error) {
            console.log(error.response);
        }
    };

    const isButtonClickable = Object.values(userData).every(value => value !== "");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.createAccountView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>
                        Almost there...
                    </Text>

                    <Text style={styles.sloganText}>
                        Please provide this latest information about yourself
                    </Text>
                </View>
            </View>

            <Calendar handleSavingData={handleSavingInformation}/>

            <Gender handleSavingData={handleSavingInformation}/>

            <TouchableOpacity
                style={[styles.button, styles.buttonInterests]}
                onPress={() => navigation.navigate("Topics",
                    { handleSavingData: handleSavingInformation, userData: userData })
                }
            >
                <Text style={[styles.buttonTextInterests, styles.buttonText]}>Topics of interest</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.buttonDesc]}
                onPress={() => navigation.navigate("Description",
                    { handleSavingData: handleSavingInformation, prevDescription: userData.description })
                }
            >
                <Text style={[styles.buttonTextDesc, styles.buttonText]}>Description</Text>
            </TouchableOpacity>

            <View style={styles.nextScreenView}>
                {isButtonClickable ? (
                    <TouchableOpacity
                        style={styles.nextScreen}
                        onPress={() => {
                            handleSubmitUserData();
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
    button: {
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
    buttonInterests: {
        borderWidth: 0,
        backgroundColor: "#7c46fa",
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonDesc: {
        borderColor: "#7c46fa",
    },
    buttonText: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextInterests: {
        color: "#FFFFFF",
    },
    buttonTextDesc: {
        color: "#7c46fa",
    },
    nextScreenView: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
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

export default OtherInformation;