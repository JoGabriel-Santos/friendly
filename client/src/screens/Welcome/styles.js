import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    welcomeImage: {
        height: Dimensions.get("window").height / 2.5,
    },
    viewDescription: {
        paddingHorizontal: 35,
        paddingTop: 80,
    },
    homeTitle: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 35,
        textAlign: "center"
    },
    homeParagraph: {
        color: "#FFFFFF",
        fontFamily: "nunito-regular",
        fontSize: 18,
        marginTop: 20,
        textAlign: "center",
    },
    viewButtons: {
        flexDirection: "row",
        gap: 20,
        justifyContent: "space-between",
        paddingHorizontal: 35,
        paddingTop: 60,
    },
    buttonLogin: {
        backgroundColor: "#5151C6",
        borderRadius: 10,
        flex: 1,
        paddingVertical: 15,
    },
    buttonRegister: {
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        paddingVertical: 15,
    },
    buttonTextLogin: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    buttonTextRegister: {
        color: "#FFFFFF",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    }
});

export default styles;