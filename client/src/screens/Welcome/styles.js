import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: "center",
    },
    welcomeImage: {
        height: Dimensions.get("window").height / 2.5,
    },
    viewDescription: {
        paddingHorizontal: 40,
        paddingTop: 40,
    },
    homeTitle: {
        color: "#1F41BB",
        fontFamily: "nunito-bold",
        fontSize: 35,
        textAlign: "center"
    },
    homeParagraph: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
        marginTop: 20,
        textAlign: "center",
    },
    viewButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    buttonLogin: {
        backgroundColor: "#1F41BB",
        borderRadius: 10,
        paddingVertical: 15,
        width: 190,
    },
    buttonRegister: {
        borderColor: "#1F41BB",
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 15,
        width: 150,
    },
    buttonTextLogin: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextRegister: {
        color: "#1F41BB",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    }
});

export default styles;