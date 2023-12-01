import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    friendsHeader: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(51,51,51,0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: StatusBar.currentHeight + 10,
        paddingLeft: 10,
        paddingRight: 20,
    },
    backButton: {
        padding: 10,
    },
    containerLeft: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
    },
    headerText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 22,
    },
    card: {
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        padding: 15,
    },
    viewUserInfo: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
    },
    userImage: {
        borderRadius: 25,
        height: 50,
        marginRight: 10,
        width: 50,
    },
    userName: {
        fontFamily: "nunito-semiBold",
        fontSize: 18,
    },
    userCountry: {
        fontFamily: "nunito-regular",
        fontSize: 14,
    },
    buttonContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        color: "red",
        fontSize: 15,
        fontWeight: "bold",
    },
    emptySearchContainer: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    emptySearchText: {
        fontFamily: "nunito-regular",
        fontSize: 18,
    }
});

export default styles;