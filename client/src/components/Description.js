import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Description = ({ route }) => {
    const navigation = useNavigation();

    const { handleSavingData, prevDescription } = route.params;

    const [description, setDescription] = useState(prevDescription);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.descriptionHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("OtherInformation")}
                    >
                        <Ionicons name={"arrow-back-outline"} color={"#333"} size={30}/>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Description</Text>
                </View>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        handleSavingData("description", description);
                        navigation.navigate("OtherInformation");
                    }}
                >
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.aboutMeText}>About me</Text>

            <ScrollView style={styles.descriptionView}>
                <TextInput
                    style={styles.description}
                    multiline={true}
                    numberOfLines={30}
                    placeholder={"Write about you here..."}
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    descriptionHeader: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "rgba(51,51,51,0.2)",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: StatusBar.currentHeight + 10,
        paddingLeft: 10,
        paddingRight: 20,
    },
    containerLeft: {
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
    },
    backButton: {
        padding: 10,
    },
    headerText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 22,
    },
    aboutMeText: {
        borderBottomWidth: 1,
        borderColor: "rgba(51,51,51,0.2)",
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        padding: 20,
    },
    descriptionView: {
        flex: 1,
    },
    description: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        padding: 20,
        textAlignVertical: "top",
    },
    saveButton: {
        backgroundColor: "transparent",
        borderColor: "#333",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    saveText: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 22,
        textAlign: "center",
    },
});

export default Description;