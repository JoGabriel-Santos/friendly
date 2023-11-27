import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../User";
import styles from "./styles";

const Profile = () => {
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = useCallback(() => {
        const getUserInfo = async () => {
            try {
                const user = await AsyncStorage.getItem("userInfo");
                if (user) {
                    const userInfoJSON = JSON.parse(user);
                    setUserInfo(userInfoJSON);

                } else {
                    navigation.navigate("Welcome");
                }

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        getUserInfo();
    }, [navigation]);

    useFocusEffect(fetchUserInfo);

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("userInfo");
            navigation.navigate("Welcome");

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    return (
        <React.Fragment>
            <User userInfo={userInfo}/>

            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonLogout]}
                    onPress={logout}
                >
                    <Text style={[styles.buttonTextLogout, styles.buttonText]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    )
};

export default Profile;