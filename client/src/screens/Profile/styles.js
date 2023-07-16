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
    profileImageView: {
        alignItems: "center",
        flex: 1,
        position: "relative",
    },
    profileImage: {
        borderRadius: 100,
        height: 110,
        position: "absolute",
        top: "64%",
        width: 110,
    },
    photoButton: {
        backgroundColor: "#7c46fa",
        borderRadius: 15,
        left: "54%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        position: "absolute",
        top: "110%",
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
    backButton: {
        left: 20,
        position: "absolute",
        top: "30%",
    },
    containerEdit: {
        paddingHorizontal: 20,
    },
    inputField: {
        gap: 20,
        marginTop: 80,
    },
    viewSaveButton: {
        flex: 1,
        paddingHorizontal: 20,
    },
    saveButton: {
        backgroundColor: "#7c46fa",
        borderRadius: 100,
        marginBottom: 30,
        marginTop: "auto",
        padding: 18,
    },
    saveText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
});

export default styles;