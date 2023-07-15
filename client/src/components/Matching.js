import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

const Matching = ({ userData }) => {

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <Image
                style={styles.profilePicture}
                source={item.picture}
            />

            <CountryFlag style={styles.countryFlag} isoCode="br" size={22}/>

            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">João Gabriel de C Santos</Text>
                    <Text style={styles.userDesc} numberOfLines={2} ellipsizeMode="tail">
                        If you don't have anything specific in mind,
                        tell me about your day, what you enjoy doing,
                        what makes you happy, or what your dreams are...
                    </Text>
                </View>

                <Text style={styles.matchedInfo}>Common interests: 2</Text>
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