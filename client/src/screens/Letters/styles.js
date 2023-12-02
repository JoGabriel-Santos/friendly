import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    lettersHeader: {
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
    viewUserInfo: {
        borderBottomColor: "rgba(51,51,51,0.2)",
        borderBottomWidth: .2,
        flexDirection: "column",
        paddingTop: 12,
        marginHorizontal: 20,
    },
    userImage: {
        borderRadius: 10,
        height: 80,
        marginBottom: 5,
        marginRight: 10,
        width: 80,
    },
    userName: {
        fontFamily: "nunito-bold",
        fontSize: 25,
        paddingVertical: 10,
    },
    userDescription: {
        fontFamily: "nunito-regular",
        fontSize: 16,
        paddingBottom: 10,
    },
    messageCard: {
        borderColor: "rgba(51,51,51,0.64)",
        borderWidth: .8,
        borderRadius: 8,
        margin: 8,
        height: 242,
        width: 180,
    },
    messageHeader: {
        flexDirection: "row",
        marginBottom: 10,
    },
    viewed: {
        marginTop: 10,
        marginLeft: 10,
    },
    stamp: {
        marginTop: 8,
        height: 80,
        width: 80,
    },
    messageContent: {
        flex: 1,
        marginHorizontal: 12,
    },
    content: {
        fontSize: 14,
    },
    messageUserInfo: {
        marginBottom: 8,
        marginHorizontal: 12,
    },
    userInfoSender: {
        fontFamily: "nunito-bold",
        fontSize: 15,
    },
    userInfoTime: {
        fontSize: 15,
    },
    writeLetter: {
        alignItems: "center",
        backgroundColor: "#7c46fa",
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 2,
        elevation: 5,
        height: 50,
        justifyContent: "center",
        left: "69%",
        paddingTop: 10,
        position: "absolute",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        top: "93%",
        width: 120,
        zIndex: 100,
    },
    writeLetterText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 11,
        textAlign: "center",
        textAlignVertical: "center",
    },
});

export default styles;