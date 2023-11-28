import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Matching from "../../components/Matching";
import * as API from "../../api";
import styles from "./styles";

const Community = () => {
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState();
    const [allUsers, setAllUsers] = useState();

    const fetchUserInfo = useCallback(async () => {
        try {
            const user = await AsyncStorage.getItem("userInfo");
            if (user) {
                const userInfoJSON = JSON.parse(user);
                setUserInfo(userInfoJSON);

            } else {
                navigation.navigate("Welcome");
            }

        } catch (error) {
            console.log("An error occurred while fetching user info: ", error);
        }
    }, [navigation]);

    const fetchAllUsers = useCallback(async () => {
        try {
            if (userInfo) {
                const { data } = await API.fetchAllUsers(userInfo.email);
                setAllUsers(data);
            }
        } catch (error) {
            console.log("An error occurred while fetching all users: ", error);
        }
    }, [userInfo]);

    useEffect(() => {
        fetchUserInfo();
    }, [fetchUserInfo]);

    useEffect(() => {
        fetchAllUsers();
    }, [fetchAllUsers]);

    const userData = [
        { id: 1, picture: require("../../utils/images/profile.png") },
        { id: 2, picture: require("../../utils/images/profile.png") },
        { id: 3, picture: require("../../utils/images/profile.png") },
        { id: 4, picture: require("../../utils/images/profile.png") },
    ];

    if (!allUsers) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.communityHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons
                            name={"arrow-back-outline"}
                            color={"#333"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Matches</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Filters")}>
                    <Ionicons
                        name={"options-outline"}
                        color={"#333"}
                        size={30}
                    />
                </TouchableOpacity>
            </View>

            <Matching userData={allUsers}/>
        </SafeAreaView>
    )
};

export default Community;