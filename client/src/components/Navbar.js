import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NavButton = ({ iconName, screenName, currentScreen, onPress }) => {
    let buttonColor = currentScreen === screenName ? "#7c46fa" : "#BDBDBD";

    if (screenName === "Logout") {
        buttonColor = "#FF0000";
    }

    return (
        <TouchableOpacity
            style={styles.navbarItem}
            onPress={onPress}
        >
            <Ionicons
                name={iconName}
                color={buttonColor}
                size={25}
            />
        </TouchableOpacity>
    );
};

const Navbar = () => {
    const navigation = useNavigation();

    const [currentScreen, setCurrentScreen] = useState("");

    const screensWithoutNavbar = [
        "Welcome",
        "Authentication",
        "CreateAccount",
        "UploadPicture",
        "SelectProficiency",
        "Proficiency",
        "OtherInformation",
        "Topics",
        "Description"
    ];

    const logout = async () => {
        try {
            await AsyncStorage.removeItem("userInfo");
            navigation.navigate("Welcome");

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    useEffect(() => {
        return navigation.addListener("state", () => {
            const updatedScreen = navigation.getCurrentRoute()?.name;
            setCurrentScreen(updatedScreen);
        });
    }, [navigation]);

    return (
        <View style={[styles.navbar,
            screensWithoutNavbar.includes(currentScreen) ? { display: "none" } : { display: "flex" }]}>
            <NavButton
                iconName="grid-outline"
                screenName="Home"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Home")}
            />

            <NavButton
                iconName="people-outline"
                screenName="Friends"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Friends")}
            />

            <NavButton
                iconName="search-outline"
                screenName="Community"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Community")}
            />

            <NavButton
                iconName="notifications-outline"
                screenName="Notifications"
                currentScreen={currentScreen}
                onPress={() => navigation.navigate("Notifications")}
            />

            <NavButton
                iconName="exit-outline"
                screenName="Logout"
                currentScreen={currentScreen}
                onPress={logout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        borderColor: "#BDBDBD",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "auto",
        padding: 10,
    },
    navbarItem: {
        padding: 10,
    },
});

export default Navbar;