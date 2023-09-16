import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from "../../components/ImagePicker";
import Calendar from "../../components/Calendar";
import Gender from "../../components/Gender";
import Input from "../../components/Input";
import styles from "./styles";

const Profile = () => {
    const navigation = useNavigation();
    const inputRef = useRef(null);

    const [userData, setUserData] = useState({
        name: "",
        picture: "",
        birthday: "",
        proficiency: "",
        gender: "",
        topics: "",
        description: "",
    });

    const fetchUserInfo = useCallback(() => {
        const getUserInfo = async () => {
            try {
                const user = await AsyncStorage.getItem("userInfo");
                if (user) {
                    const userInfoJSON = JSON.parse(user);
                    setUserData(prevData => ({
                        ...prevData,
                        name: userInfoJSON.name,
                        picture: userInfoJSON.picture
                    }));

                } else {
                    navigation.navigate("Welcome");
                }

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        getUserInfo();
    }, [navigation]);

    const handleSavingData = (name, value) => {
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("userInfo");
            navigation.navigate("Welcome");

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

        if (inputRef.current) {
            inputRef.current.blur();
        }
    }, []);

    useFocusEffect(fetchUserInfo);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0.50)"
                    barStyle="light-content"
                    translucent={true}
                />

                <ImageBackground
                    source={require("../../utils/images/header-bg.png")}
                    style={styles.headerBackground}
                    resizeMode="cover"
                >
                    <ImagePicker
                        handleSavingData={handleSavingData}
                        prevSelectedPicture={userData.picture === "" ? userData.picture : "https://img.freepik.com/free-icon/user_318-159711.jpg"}
                    />

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons name={"arrow-back-outline"} color={"white"} size={30}/>
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <Text style={styles.editText}>Edit profile</Text>
                    </View>

                    <View style={styles.viewSaveButton}>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={styles.containerEdit}>
                    <View style={styles.inputField}>
                        <Input
                            ref={inputRef}
                            placeHolder="Name"
                            onChangeText={(text) => handleSavingData("name", text)}
                            value={userData.name}
                        />
                    </View>
                </View>

                <Calendar handleSavingData={handleSavingData}/>

                <View style={styles.viewProficiency}>
                    <View>
                        <Text style={styles.selectProficiency}>Select your English proficiency</Text>
                        <TouchableOpacity
                            style={styles.inputButton}
                            onPress={() => navigation.navigate("Proficiency",
                                { handleSavingData, prevSelectedProficiency: userData.proficiency })
                            }
                        >
                            <Text style={styles.inputButtonText}>
                                {
                                    userData.proficiency !== "" ? userData.proficiency : "Beginner"
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Gender handleSavingData={handleSavingData}/>

                <View style={styles.viewButtons}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonInterests]}
                        onPress={() => navigation.navigate("Topics",
                            { handleSavingData, prevSelectedTopics: userData.topics })
                        }
                    >
                        <Text style={[styles.buttonTextInterests, styles.buttonText]}>Topics of interest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonDesc]}
                        onPress={() => navigation.navigate("Description",
                            { handleSavingData, prevDescription: userData.description })
                        }
                    >
                        <Text style={[styles.buttonTextDesc, styles.buttonText]}>Description</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonLogout]}
                        onPress={logout}
                    >
                        <Text style={[styles.buttonTextLogout, styles.buttonText]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};

export default Profile;