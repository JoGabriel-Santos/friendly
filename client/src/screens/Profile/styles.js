import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 18,
        elevation: 50,
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 15,
    },
    buttonLogout: {
        borderColor: "#fa4646",
    },
    buttonText: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextLogout: {
        color: "#fa4646",
    },
});

export default styles;