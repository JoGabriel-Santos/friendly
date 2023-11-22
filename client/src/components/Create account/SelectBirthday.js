import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SelectBirthday = () => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.createAccountView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>
                        Choose a photo
                    </Text>

                    <Text style={styles.sloganText}>
                        On Friendly, everyone has a profile photo which clearly shows their face
                    </Text>
                </View>


            </View>

            <View style={styles.nextScreenView}>
                <TouchableOpacity style={styles.nextScreen}>
                    <Text style={styles.nextScreenText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        paddingHorizontal: 20,
    },
    createAccountView: {
        alignItems: "center",
        paddingVertical: 50,
    },
    header: {
        alignItems: "center",
    },
    authText: {
        color: "#7c46fa",
        fontFamily: "nunito-extraBold",
        fontSize: 35,
        marginVertical: 30,
    },
    sloganText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 20,
        maxWidth: "85%",
        textAlign: "center",
    },
    nextScreenView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    nextScreen: {
        backgroundColor: "#7c46fa",
        borderRadius: 100,
        marginBottom: 30,
        padding: 18,
        width: "100%",
    },
    nextScreenText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
});

export default SelectBirthday;