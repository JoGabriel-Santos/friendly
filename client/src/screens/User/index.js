import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { calculateDistance } from "../../helpers/distance";
import { getLocation } from "../../helpers/geolocation";
import * as API from "../../api/index";
import styles from "./styles";

const User = ({ route }) => {
    const navigation = useNavigation();

    const { userEmail } = route.params;

    const [userInfo, setUserInfo] = useState();
    const [distance, setDistance] = useState();
    const [hasPendingRequests, setHasPendingRequests] = useState(false);

    const [showFullBio, setShowFullBio] = useState(false);
    const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent", "Native"];

    const formatDateOfBirth = (data) => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const { day, month, ordinal, age } = data;
        const monthName = months[month - 1];

        return `${monthName} ${day}${ordinal} (${age})`;
    };

    const createRequest = async () => {
        const userLogged = await AsyncStorage.getItem("userInfo");
        const userLoggedJSON = JSON.parse(userLogged);

        try {
            await API.createRequest({ fromUser: userLoggedJSON._id, toUser: userInfo._id });
            setHasPendingRequests(true);

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await API.fetchUserData(userEmail);
                setUserInfo(data);

                const userLocation = data.latLong;

                await fetchLocation(userLocation);
                await checkPendingRequests(data.email);

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        fetchData();
    }, []);

    const fetchLocation = async (userLocation) => {
        try {
            const locationData = await getLocation();

            const distance = calculateDistance(
                locationData.latitude,
                locationData.longitude,
                userLocation.latitude,
                userLocation.longitude
            );

            setDistance(distance);

        } catch (error) {
            console.error("Error fetching location", error);
        }
    };

    const checkPendingRequests = async (userEmail) => {
        const userLogged = await AsyncStorage.getItem("userInfo");
        const userLoggedJSON = JSON.parse(userLogged);

        try {
            const { data } = await API.getPendingRequests(userEmail);

            const hasPendingRequests = data.pendingRequests.some(
                request => request.fromUser._id === userLoggedJSON._id
            );

            setHasPendingRequests(hasPendingRequests);

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    if (!userInfo) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ paddingTop: 50 }}/>
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.userContacts,
                    hasPendingRequests ? styles.pendingRequest : null
                ]}
                onPress={createRequest}
                disabled={hasPendingRequests}
            >
                {hasPendingRequests ? (
                    <Ionicons
                        name={"checkmark-outline"}
                        color={"#ffffff"}
                        size={28}
                    />
                ) : (
                    <Ionicons
                        name={"person-add-outline"}
                        color={"#ffffff"}
                        size={28}
                    />
                )}
                <Text
                    style={styles.contactText}
                >
                    {hasPendingRequests ? "Request sent" : "Add friend"}
                </Text>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor="rgba(0,0,0,0.50)" barStyle="light-content" translucent={true}/>

                <ImageBackground
                    source={require("../../utils/images/header-bg.png")}
                    style={styles.headerBackground}
                    resizeMode="cover"
                >
                    <View style={styles.profileImageView}>
                        <Image
                            source={userInfo.picture ? { uri: userInfo.picture } : require("../../utils/images/userPhoto.png")}
                            style={styles.profileImage}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons
                            name={"arrow-back-outline"}
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <Text style={styles.userNameText}>{userInfo.name}</Text>
                    </View>
                </ImageBackground>

                <View style={styles.aboutUser}>
                    <Text style={styles.aboutUserText}>About {userInfo.name}</Text>
                </View>

                <View style={styles.bio}>
                    <Text style={styles.bioText} numberOfLines={showFullBio ? undefined : 3}>{userInfo.description}</Text>
                    {
                        !showFullBio && (
                            <TouchableOpacity
                                style={styles.buttonDesc}
                                onPress={() => setShowFullBio(true)}
                            >
                                <Text style={styles.buttonTextDesc}>See more</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={styles.viewUserInformation}>
                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"gift-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>{formatDateOfBirth(userInfo.birthday)}</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"male-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>{userInfo.gender}</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"location-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>{userInfo.country}</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"map-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>≈{distance?.distance} km</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"mail-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>
                            Letter delivers in {distance?.hours === 0 ? `${distance?.minutes} minutes` : `${distance?.hours} hours`}
                        </Text>
                    </View>
                </View>

                <View style={styles.viewTopics}>
                    <Text style={styles.aboutUserText}>Topics of interests</Text>

                    <View style={styles.topics}>
                        {
                            userInfo.topics.map((topic, index) => (
                                <Text style={styles.commonTopic} key={index}>{topic.topicName}</Text>
                            ))
                        }
                    </View>
                </View>

                <View style={styles.viewProficiency}>
                    <Text style={styles.aboutUserText}>Proficiency</Text>

                    <View style={styles.proficiencyContainer}>
                        {userInfo.proficiency.map((language, index) => (
                            index % 2 === 0 && (
                                <View key={index} style={styles.row}>
                                    <View style={styles.proficiencyIndicator}>
                                        <Text style={styles.indicatorText}>
                                            {language[0].replace(/\([^)]*\)/, '')}
                                        </Text>
                                        <View style={styles.indicatorIcon}>
                                            {proficiencyLevels.map((level, levelIndex) => (
                                                <Ionicons
                                                    key={levelIndex}
                                                    name={
                                                        levelIndex - 1 < proficiencyLevels.indexOf(language[1])
                                                            ? 'radio-button-on-outline'
                                                            : 'radio-button-off-outline'
                                                    }
                                                    color={'#333'}
                                                    size={15}
                                                />
                                            ))}
                                        </View>
                                    </View>

                                    {userInfo.proficiency[index + 1] && (
                                        <View style={styles.proficiencyIndicator}>
                                            <Text style={styles.indicatorText}>
                                                {userInfo.proficiency[index + 1][0].replace(/\([^)]*\)/, '')}
                                            </Text>
                                            <View style={styles.indicatorIcon}>
                                                {proficiencyLevels.map((level, levelIndex) => (
                                                    <Ionicons
                                                        key={levelIndex}
                                                        name={
                                                            levelIndex - 1 <
                                                            proficiencyLevels.indexOf(userInfo.proficiency[index + 1][1])
                                                                ? 'radio-button-on-outline'
                                                                : 'radio-button-off-outline'
                                                        }
                                                        color={'#333'}
                                                        size={15}
                                                    />
                                                ))}
                                            </View>
                                        </View>
                                    )}
                                </View>
                            )
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default User;