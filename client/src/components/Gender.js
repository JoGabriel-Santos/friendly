import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Gender = ({ handleSavingData }) => {
    const [selectedGender, setSelectedGender] = useState("Male");

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
        handleSavingData("gender", gender);
    };

    const renderGenderButton = (gender) => (
        <TouchableOpacity
            style={[
                styles.checkbox,
                {
                    backgroundColor:
                        selectedGender === gender ? "#7c46fa" : "#333",
                },
            ]}
            onPress={() => handleGenderSelection(gender)}
        >
            <Text style={styles.genderName}>{gender}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.checkboxView}>
                {renderGenderButton("Male")}
                {renderGenderButton("Female")}
                {renderGenderButton("Non binary")}
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
        marginHorizontal: 2,
    },
    genderName: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Gender;
