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
    textContainer: {
        alignItems: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: "32%",
    },
    userNameText: {
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
    aboutUser: {
        paddingHorizontal: 20,
        paddingTop: 70,
    },
    aboutUserText: {
        color: "#4a4848",
        fontFamily: "nunito-bold",
        fontSize: 16,
    },
    bio: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 10,
    },
    bioText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
    },
    buttonDesc: {
        borderColor: "#7c46fa",
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        marginVertical: 15,
        paddingVertical: 10,
    },
    buttonTextDesc: {
        color: "#7c46fa",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
    viewUserContacts: {
        alignItems: "center",
        borderColor: "rgba(124,70,250,0.2)",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    userContacts: {
        alignItems: "center",
        gap: 10,
    },
    disabledButton: {
        opacity: 0.5,
    },
    disabledText: {
        color: "rgba(51, 51, 51, 0.5)",
    },
    contactText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 16,
        textAlign: "center",
    },
    viewUserInformation: {
        borderColor: "rgba(124,70,250,0.2)",
        borderTopWidth: 1,
        gap: 10,
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    userInformation: {
        alignItems: "center",
        flexDirection: "row",
        gap: 12,
    },
    infoText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
    },
    viewTopics: {
        borderColor: "rgba(124,70,250,0.2)",
        borderTopWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    topics: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
        paddingTop: 15,
    },
    commonTopic: {
        backgroundColor: "#7c46fa",
        borderRadius: 15,
        color: "#FFFFFF",
        paddingHorizontal: 10 + 1,
        paddingVertical: 5 + 1,
    },
    uncommonTopic: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        borderWidth: 1,
        color: "#333",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    viewProficiency: {
        borderColor: "rgba(124,70,250,0.2)",
        borderTopWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    proficiencyIndicator: {
        alignItems: "flex-start",
        flex: 1,
        paddingTop: 10,
    },
    indicatorText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 18,
    },
    indicatorIcon: {
        flexDirection: "row",
        paddingTop: 2,
    },
});

export default styles;