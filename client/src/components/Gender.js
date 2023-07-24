import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Gender = ({ handleSavingData }) => {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
        handleSavingData("gender", gender);
    };

    return (
        <View style={styles.container}>
            <View style={styles.checkboxView}>
                <TouchableOpacity
                    style={[styles.checkbox,
                        selectedGender === "Male" ?
                            { backgroundColor: "#7c46fa" } : { backgroundColor: "#333" }]}
                    onPress={() => handleGenderSelection("Male")}
                >
                    <Text style={styles.genderName}>Male</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.checkbox, selectedGender === "Female" ?
                        { backgroundColor: "#7c46fa" } : { backgroundColor: "#333" }]}
                    onPress={() => handleGenderSelection("Female")}
                >
                    <Text style={styles.genderName}>Female</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.checkbox, selectedGender === "Non binary" ?
                        { backgroundColor: "#7c46fa" } : { backgroundColor: "#333" }]}
                    onPress={() => handleGenderSelection("Non binary")}
                >
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
        paddingTop: 40,
    },
    checkboxView: {
        flexDirection: "row",
    },
    checkbox: {
        alignItems: "center",
        borderRadius: 5,
        flex: 1,
        height: 40,
        justifyContent: "center",
        marginHorizontal: 5,
    },
    genderName: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Gender;
