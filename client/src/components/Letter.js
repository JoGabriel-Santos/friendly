import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { calculateDistance } from "../helpers/distance";
import * as API from "../api/index";

const Letter = ({ route }) => {
    const navigation = useNavigation();

    const { penpalInfo, letterSender, letterContent } = route.params;

    const [userLogged, setUserLogged] = useState();

    const [isReadOnly, setIsReadOnly] = useState(letterContent !== "");
    const [letterText, setLetterText] = useState(letterContent !== "" ? letterContent : "");

    const handleSendingLetter = async () => {
        const timeToArrive = calculateDistance(
            userLogged.latLong.latitude,
            userLogged.latLong.longitude,
            penpalInfo.latLong.latitude,
            penpalInfo.latLong.longitude
        );

        const arrivalTime = await calculateArrivalTime(timeToArrive.hours, timeToArrive.minutes);

        const letterInfo = {
            penpal1Id: userLogged._id,
            penpal2Id: penpalInfo._id,
            letter: {
                content: letterText,
                sender: userLogged.name,
                time: arrivalTime
            }
        };

        try {
            await API.sendLetter(letterInfo);
            navigation.navigate("Letters", { penpalInfo: penpalInfo });

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    async function calculateArrivalTime(hoursToAdd, minutesToAdd) {
        try {
            const response = await fetch("https://worldtimeapi.org/api/ip");
            const data = await response.json();
            const currentTime = new Date(data.utc_datetime);

            const arrivalTime = new Date(
                currentTime.getTime() + hoursToAdd * 60 * 60 * 1000 + minutesToAdd * 60 * 1000
            );

            return arrivalTime.toLocaleString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });

        } catch (error) {
            console.error("Error calculating arrival time: ", error);
            return null;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userLogged = await AsyncStorage.getItem("userInfo");
                const userLoggedJSON = JSON.parse(userLogged);

                setUserLogged(userLoggedJSON);

            } catch (error) {
                console.error("Error retrieving user data: ", error);
            }
        };

        fetchData();
    }, []);

    if (!userLogged) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ paddingTop: 50 }}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.letterHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Letters",
                            { penpalInfo: penpalInfo })
                        }
                    >
                        <Ionicons name={"arrow-back-outline"} color={"#333"} size={30}/>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Letter</Text>
                </View>

                <TouchableOpacity
                    style={[styles.sendLetterButton, isReadOnly && styles.hiddenButton]}
                    onPress={() => handleSendingLetter()}
                    disabled={isReadOnly}
                >
                    <Text style={styles.saveText}>{"Send letter"}</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.aboutMeText}>{isReadOnly ? `Letter from ${letterSender}` : `Writing to ${penpalInfo.name}`}</Text>

            <ScrollView style={styles.descriptionView}>
                <TextInput
                    style={styles.description}
                    multiline={true}
                    numberOfLines={30}
                    placeholder={"Write your letter here..."}
                    onChangeText={(text) => setLetterText(text)}
                    value={letterText}
                    editable={!isReadOnly}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    letterHeader: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(51,51,51,0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: StatusBar.currentHeight + 10,
        paddingLeft: 10,
        paddingRight: 20,
    },
    containerLeft: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
    },
    backButton: {
        padding: 10,
    },
    headerText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 22,
    },
    aboutMeText: {
        borderBottomWidth: 1,
        borderColor: "rgba(51,51,51,0.2)",
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        padding: 20,
    },
    descriptionView: {
        flex: 1,
    },
    description: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        padding: 20,
        textAlignVertical: "top",
    },
    sendLetterButton: {
        backgroundColor: "transparent",
        borderColor: "#333",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    saveText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 22,
        textAlign: "center",
    },
    hiddenButton: {
        display: "none",
    },
});

export default Letter;