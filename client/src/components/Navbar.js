import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.viewNavbar}>
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Ionicons name={"grid-outline"} color={"white"} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name={"people-outline"} color={"white"} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Community")}>
                    <Ionicons name={"search-outline"} color={"white"} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name={"person-outline"} color={"white"} size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewNavbar: {
        flex: 1,
    },
    navbar: {
        backgroundColor: "#5151C6",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "auto",
        padding: 25,
    },
});

export default Navbar;