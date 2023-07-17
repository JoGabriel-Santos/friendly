import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Gender = () => {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.selectGenderText}>Select your gender</Text>

            <View style={styles.checkboxView}>
                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => handleGenderSelection("Male")}
                >
                    {
                        selectedGender === "Male" ? (
                            <Ionicons
                                name={"checkbox-outline"}
                                color={"#7c46fa"}
                                size={25}
                            />
                        ) : (
                            <Ionicons
                                name={"square-outline"}
                                color={"#333"}
                                size={25}
                            />
                        )
                    }
                    <Text style={styles.genderName}>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => handleGenderSelection("Female")}
                >
                    {
                        selectedGender === "Female" ? (
                            <Ionicons
                                name={"checkbox-outline"}
                                color={"#7c46fa"}
                                size={25}
                            />
                        ) : (
                            <Ionicons
                                name={"square-outline"}
                                color={"#333"}
                                size={25}
                            />
                        )
                    }
                    <Text style={styles.genderName}>Female</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => handleGenderSelection("Non binary")}
                >
                    {
                        selectedGender === "Non binary" ? (
                            <Ionicons
                                name={"checkbox-outline"}
                                color={"#7c46fa"}
                                size={25}
                            />
                        ) : (
                            <Ionicons
                                name={"square-outline"}
                                color={"#333"}
                                size={25}
                            />
                        )
                    }
                    <Text style={styles.genderName}>Non binary</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    selectGenderText: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 20,
        marginBottom: 20,
    },
    checkboxView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    checkbox: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    genderName: {
        color: "#333",
        fontFamily: "nunito-regular",
        fontSize: 22,
    },
});

export default Gender;