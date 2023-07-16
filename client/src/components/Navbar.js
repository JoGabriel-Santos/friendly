import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
    const navigation = useNavigation();

    const [currentScreen, setCurrentScreen] = useState("");

    useEffect(() => {
        return navigation.addListener("state", () => {
            const updatedScreen = navigation.getCurrentRoute()?.name;
            setCurrentScreen(updatedScreen);
        });
    }, [navigation]);

    return (
        <View style={styles.navbar}>
            <TouchableOpacity
                style={styles.navbarItem}
                onPress={() => navigation.navigate("Home")}
            >
                <Ionicons
                    name={"grid-outline"}
                    color={currentScreen === "Home" ? "#7c46fa" : "#BDBDBD"}
                    size={25}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navbarItem}
                onPress={() => console.log("Notifications")}
            >
                <Ionicons
                    name={"people-outline"}
                    color={currentScreen === "Friends" ? "#7c46fa" : "#BDBDBD"}
                    size={25}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navbarItem}
                onPress={() => navigation.navigate("Community")}
            >
                <Ionicons
                    name={"search-outline"}
                    color={currentScreen === "Community" ? "#7c46fa" : "#BDBDBD"}
                    size={25}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navbarItem}
                onPress={() => console.log("Notifications")}
            >
                <Ionicons
                    name={"notifications-outline"}
                    color={currentScreen === "Notifications" ? "#7c46fa" : "#BDBDBD"}
                    size={25}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navbarItem}
                onPress={() => navigation.navigate("Profile")}
            >
                <Ionicons
                    name={"person-outline"}
                    color={currentScreen === "Profile" ? "#7c46fa" : "#BDBDBD"}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        borderColor: "rgba(124,70,250,0.2)",
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