import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Calendar from "../Calendar";
import Gender from "../Gender";

const OtherInformation = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.createAccountView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>
                        Almost there...
                    </Text>

                    <Text style={styles.sloganText}>
                        Please provide your date of birth, gender, and topics of interest
                    </Text>
                </View>
            </View>

            <Calendar/>

            <Gender/>

            <TouchableOpacity
                style={[styles.button, styles.buttonInterests]}
                onPress={() => navigation.navigate("Topics",
                    {})
                }
            >
                <Text style={[styles.buttonTextInterests, styles.buttonText]}>Topics of interest</Text>
            </TouchableOpacity>

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
    button: {
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 15,
    },
    buttonInterests: {
        borderWidth: 0,
        backgroundColor: "#7c46fa",
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextInterests: {
        color: "#FFFFFF",
    },
    nextScreenView: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
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

export default OtherInformation;