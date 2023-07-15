import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    communityHeader: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(51,51,51,0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
        paddingTop: StatusBar.currentHeight + 20,
        paddingHorizontal: 20,
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
});

export default styles;