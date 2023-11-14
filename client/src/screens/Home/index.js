import React, { useCallback, useState } from "react";
import { Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as API from "../../api/index";
import styles from "./styles";

const Home = () => {
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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>

            <ImageBackground
                source={require("../../utils/images/header-bg.png")}
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.profileImageView}>
                    <Image
                        source={!userInfo?.photo && require("../../utils/images/userPhoto.png")}
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.textContainer}>
                    {
                        userInfo && (
                            <Text style={styles.editText}>Hello, {userInfo.name}!</Text>
                        )
                    }
                </View>

            </ImageBackground>

            <ImageBackground
                source={require("../../utils/images/home-image.png")}
                style={styles.homeImage}
                resizeMode="contain"
            />

            <View style={styles.meetPeopleView}>
                <Text style={styles.meetPeopleTitle}>Ready to meet a new friend?</Text>
                <Text style={styles.meetPeopleDescr}>Start connecting with the world on Friend.ly</Text>
            </View>

            <View style={styles.meetPeopleButtons}>
                <TouchableOpacity style={[styles.meetPeopleButton, styles.automatchButton]}>
                    <Text style={[styles.meetPeopleText, styles.automatchText]}>
                        Auto-match
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.meetPeopleButton, styles.manuallyButton]}
                    onPress={() => navigation.navigate("Community")}
                >
                    <Text style={[styles.meetPeopleText, styles.manuallyText]}>
                        Explore manually
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Home;