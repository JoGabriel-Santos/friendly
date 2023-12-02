import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CountryFlag from "react-native-country-flag";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Matching = ({ userData }) => {
    const navigation = useNavigation();

    const [countryCodes, setCountryCodes] = useState();
    const [commonInterests, setCommonInterests] = useState(0);

    const fetchCountryCode = async (countryName) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
            const data = await response.json();

            if (data.length > 0) {
                return data[0].altSpellings[0].toLowerCase();

            } else {
                return null;
            }

        } catch (error) {
            console.error("Error in API request:", error);
            setCountryCode(null);
        }
    };

    useEffect(() => {
        const fetchCountryCodes = async () => {
            const countryCodes = await Promise.all(userData.map(user => fetchCountryCode(user.country)));
            setCountryCodes(countryCodes);
        };

        if (userData && userData.length > 0) {
            fetchCountryCodes();
        }
    }, [userData]);

    useEffect(() => {
        const checkCommonInterests = async () => {
            try {
                const user = await AsyncStorage.getItem("userInfo");
                if (user) {
                    const userInfoJSON = JSON.parse(user);

                    const commonInterests = await Promise.all(userData.map(async (otherUser) => {
                        let count = 0;

                        userInfoJSON.topics.forEach((topic) => {
                            const isCommon = otherUser.topics.some((otherTopic) => otherTopic.id === topic.id);

                            if (isCommon) {
                                count++;
                            }
                        });

                        return count;
                    }));

                    setCommonInterests(commonInterests);
                }
            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        checkCommonInterests();
    }, []);

    const renderCard = ({ item, index }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={
                () => navigation.navigate("User", { userEmail: item.email })
            }
        >
            <Image
                source={{ uri: item.picture }}
                style={styles.profilePicture}
            />

            {countryCodes[index] && (
                <CountryFlag style={styles.countryFlag} isoCode={countryCodes[index]} size={22}/>
            )}

            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                    <Text style={styles.userDesc} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
                </View>

                {commonInterests[index] && (
                    <Text style={styles.matchedInfo}>{commonInterests[index]} common interests</Text>
                )}
            </View>
        </TouchableOpacity>
    );

    if (!countryCodes || !commonInterests) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ paddingTop: 20 }}/>
    }

    return (
        <React.Fragment>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <FlatList
                data={userData}
                renderItem={renderCard}
                keyExtractor={(item) => item._id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 20,
    },
    card: {
        borderBottomColor: "rgba(51,51,51,0.2)",
        borderBottomWidth: 1,
        flexDirection: "row",
        marginBottom: 10,
        paddingBottom: 10,
    },
    profilePicture: {
        borderColor: "rgba(51,51,51,0.2)",
        borderRadius: 8,
        borderWidth: 1,
        height: 100,
        marginRight: 12,
        position: "relative",
        width: 100,
    },
    countryFlag: {
        borderTopRightRadius: 8,
        left: 0,
        position: "absolute",
        top: 78,
        width: 30,
    },
    userInfo: {
        flex: 1,
        justifyContent: "space-between",
    },
    userName: {
        color: "#333",
        fontFamily: "nunito-bold",
        fontSize: 18,
    },
    userDesc: {
        color: "#333",
        fontFamily: "nunito-light",
        fontSize: 15,
    },
    matchedInfo: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 15,
    },
});

export default Matching;