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
    viewSaveButton: {
        right: 20,
        position: "absolute",
        top: "30%",
    },
    saveButton: {
        backgroundColor: "transparent",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
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
    viewButtons: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    buttonInterests: {
        backgroundColor: "#7c46fa",
        borderRadius: 10,
        flex: 1,
        paddingVertical: 15,
    },
    buttonDesc: {
        borderColor: "#7c46fa",
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        paddingVertical: 15,
    },
    buttonTextInterests: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextDesc: {
        color: "#7c46fa",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
});

export default styles;