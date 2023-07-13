import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    authView: {
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    header: {
        alignItems: "center",
    },
    authText: {
        color: "#1F41BB",
        fontFamily: "nunito-extraBold",
        fontSize: 35,
        marginVertical: 30,
    },
    sloganText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 20,
        maxWidth: "60%",
        textAlign: "center",
    },
    inputField: {
        gap: 20,
        marginVertical: 30,
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        color: "#1F41BB",
        fontFamily: "nunito-semiBold",
        fontSize: 16,
    },
    signinButton: {
        backgroundColor: "#1F41BB",
        borderRadius: 10,
        marginVertical: 30,
        padding: 18,
    },
    signinText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    signupButton: {
        padding: 10,
    },
    signupText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
        textAlign: "center",
    },
    loginAlternatives: {
        marginTop: 30,
    },
    continueWithText: {
        color: "#1F41BB",
        fontFamily: "nunito-regular",
        fontSize: 18,
        paddingBottom: 10,
        textAlign: "center",
    },
    loginButtons: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
    }
});

export default styles;