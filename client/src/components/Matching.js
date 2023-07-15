import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { Ionicons } from "@expo/vector-icons";

const Matching = ({ userData }) => {

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Image
                source={item.picture}
                style={styles.profilePicture}
            />

            <CountryFlag style={styles.countryFlag} isoCode="br" size={22}/>

            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.userName}>João Gabriel</Text>
                    <Text style={styles.userDesc} numberOfLines={2} ellipsizeMode="tail">
                        If you don't have anything specific in mind,
                        tell me about your day, what you enjoy doing,
                        what makes you happy, or what your dreams are...
                    </Text>
                </View>

                <View style={styles.proficiencyInfo}>
                    <Text style={styles.proficiencyText}>Proficiency level:</Text>

                    <Ionicons name={"radio-button-on-outline"} color={"#333"} size={15}/>
                    <Ionicons name={"radio-button-on-outline"} color={"#333"} size={15}/>
                    <Ionicons name={"radio-button-off-outline"} color={"#333"} size={15}/>
                    <Ionicons name={"radio-button-off-outline"} color={"#333"} size={15}/>
                    <Ionicons name={"radio-button-off-outline"} color={"#333"} size={15}/>
                </View>
            </View>
        </View>
    )

    return (
        <FlatList
            data={userData}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
        />
    )
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
        position: "relative",
        width: 100,
    },
    countryFlag: {
        borderBottomRightRadius: 8,
        top: 78,
        right: 28,
        width: 28,
    },
    userInfo: {
        justifyContent: "space-between",
    },
    userName: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 18,
    },
    userDesc: {
        color: "#333",
        fontFamily: "nunito-light",
        fontSize: 15,
    },
    languageInfo: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    proficiencyInfo: {
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
    },
    proficiencyText: {
        fontFamily: "nunito-bold",
        fontSize: 15,
    },
    proficiency: {
        fontFamily: "nunito-regular",
    },
});

export default Matching;