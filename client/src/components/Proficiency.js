import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Proficiency = ({ route }) => {
    const navigation = useNavigation();

    const { languageName, handleLanguageSelect } = route.params;

    const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent", "Native"];
    const [selectedLevel, setSelectedLevel] = useState("Beginner");

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.proficiencyHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("SelectProficiency")}
                    >
                        <Ionicons name={"arrow-back-outline"} color={"#333"} size={30}/>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Proficiency</Text>
                </View>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        handleLanguageSelect(languageName, selectedLevel);
                        navigation.navigate("SelectProficiency");
                    }}
                >
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewProficiencyIndicator}>
                <Text style={styles.textProficiencyIndicator}>{languageName}</Text>

                <View style={styles.indicator}>
                    {
                        proficiencyLevels.map((level, index) => (
                            <Ionicons
                                key={index}
                                name={index - 1 < proficiencyLevels.indexOf(selectedLevel)
                                    ? "radio-button-on-outline" : "radio-button-off-outline"}
                                color={"#333"}
                                size={20}
                            />
                        ))
                    }
                </View>
            </View>

            <Text style={styles.selectText}>Select your proficiency</Text>

            <View style={styles.viewSelect}>
                {
                    proficiencyLevels.map((level, key) => (
                        <TouchableOpacity style={styles.itemSelect} onPress={() => setSelectedLevel(level)} key={key}>
                            {
                                selectedLevel === level ? (
                                    <Ionicons
                                        name={"radio-button-on-outline"}
                                        color={selectedLevel === level ? "#7c46fa" : "#333"}
                                        size={25}
                                    />
                                ) : (
                                    <Ionicons
                                        name={"radio-button-off-outline"}
                                        color={selectedLevel === level ? "#7c46fa" : "#333"}
                                        size={25}
                                    />
                                )
                            }

                            <Text style={[styles.itemName, selectedLevel === level ? { color: "#7c46fa" } : { color: "#333" }]}>
                                {level}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    proficiencyHeader: {
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
    viewProficiencyIndicator: {
        alignItems: "center",
        paddingVertical: 40,
    },
    textProficiencyIndicator: {
        color: "#333",
        fontFamily: "nunito-semiBold",
        fontSize: 25,
        textAlign: "center",
    },
    indicator: {
        flexDirection: "row",
        marginTop: 5,
    },
    selectText: {
        color: "#4a4848",
        fontFamily: "nunito-bold",
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 10,
    },
    itemSelect: {
        flexDirection: "row",
        gap: 15,
        paddingVertical: 10,
    },
    viewSelect: {
        paddingHorizontal: 20,
    },
    itemName: {
        fontFamily: "nunito-regular",
        fontSize: 20,
    },
});

export default Proficiency;