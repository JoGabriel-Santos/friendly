import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CountryFlag from "react-native-country-flag";

const Matching = ({ userData }) => {
    const navigation = useNavigation();

    const [countryCode, setCountryCode] = useState();

    useEffect(() => {
        const fetchCountryCode = async (countryName) => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
                const data = await response.json();

                if (data.length > 0) {
                    setCountryCode(data[0].altSpellings[0].toLowerCase());

                } else {
                    setCountryCode(null);
                }

            } catch (error) {
                console.error("Error in API request:", error);
                setCountryCode(null);
            }
        };

        if (userData.length > 0) {
            fetchCountryCode(userData[0].country);
        }
    }, [userData]);

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("User")}
        >
            <Image
                source={{ uri: item.picture }}
                style={styles.profilePicture}
            />

            {
                countryCode && <CountryFlag style={styles.countryFlag} isoCode={countryCode} size={22}/>
            }

            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">{countryCode}</Text>
                    <Text style={styles.userDesc} numberOfLines={2} ellipsizeMode="tail">
                        If you don't have anything specific in mind,
                        tell me about your day, what you enjoy doing,
                        what makes you happy, or what your dreams are...
                    </Text>
                </View>

                <Text style={styles.matchedInfo}>Common interests: 2</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={userData}
            renderItem={renderCard}
            keyExtractor={(item) => item._id.toString()}
            contentContainerStyle={styles.listContainer}
        />
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