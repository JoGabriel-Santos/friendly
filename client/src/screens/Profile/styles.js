import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    headerBackground: {
        height: 165,
        justifyContent: "flex-start",
        width: "100%",
    },
    textContainer: {
        alignItems: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: "32%",
    },
    editText: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 22,
        textAlign: "center",
    },
    viewSaveButton: {
        right: 20,
        position: "absolute",
        top: "32%",
    },
    saveButton: {
        backgroundColor: "transparent",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 3,
    },
    saveText: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 22,
        textAlign: "center",
    },
    backButton: {
        left: 10,
        padding: 10,
        position: "absolute",
        top: "24%",
    },
    containerEdit: {
        paddingHorizontal: 20,
    },
    inputField: {
        gap: 20,
        marginTop: 70,
    },
    viewProficiency: {
        paddingHorizontal: 20,
        paddingTop: 30,
        width: "100%",
    },
    selectProficiency: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        marginBottom: 10,
    },
    inputButton: {
        borderColor: "#333",
        borderRadius: 5,
        borderWidth: 1,
        height: 60,
        justifyContent: "center",
        paddingLeft: 10,
    },
    inputButtonText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
    },
    viewButtons: {
        flex: 1,
        gap: 22,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        paddingVertical: 15,
    },
    buttonInterests: {
        borderWidth: 0,
        backgroundColor: "#7c46fa",
        borderRadius: 10,
    },
    buttonDesc: {
        borderColor: "#7c46fa",
    },
    buttonLogout: {
        borderColor: "#fa4646",
    },
    buttonText: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextInterests: {
        color: "#FFFFFF",
    },
    buttonTextDesc: {
        color: "#7c46fa",
    },
    buttonTextLogout: {
        color: "#fa4646",
    },
});

export default styles;