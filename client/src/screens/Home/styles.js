import { Dimensions, StyleSheet } from "react-native";

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
    homeImage: {
        height: Dimensions.get("window").height / 2.5,
    },
    meetPeopleView: {
        alignItems: "center",
        gap: 10,
    },
    meetPeopleTitle: {
        color: "#7c46fa",
        fontFamily: "nunito-bold",
        fontSize: 24,
    },
    meetPeopleDescr: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
    },
    meetPeopleButtons: {
        gap: 10,
        marginTop: 40,
    },
    meetPeopleButton: {
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 16,
    },
    automatchButton: {
        backgroundColor: "#7c46fa",
    },
    manuallyButton: {
        borderColor: "#7c46fa",
        borderWidth: 1,
    },
    meetPeopleText: {
        fontFamily: "nunito-regular",
        fontSize: 20,
        textAlign: "center",
    },
    automatchText: {
        color: "white",
    },
    manuallyText: {
        color: "#7c46fa",
    },
});

export default styles;