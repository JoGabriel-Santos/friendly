import React, { useState, useRef } from "react";
import { TextInput, View, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Input = ({ placeHolder, onChangeText, value }) => {
    const [focused, setFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const isPassword = placeHolder === "Senha";

    const animatedPlaceholder = useRef(new Animated.Value(value ? 1 : 0)).current;

    const handleTextChange = (text) => {
        onChangeText(text);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleInputFocus = () => {
        setFocused(true);
        Animated.timing(animatedPlaceholder, {
            toValue: 1,
            duration: 180,
            useNativeDriver: false,
        }).start();
    };

    const handleInputBlur = () => {
        if (!value) {
            setFocused(false);
            Animated.timing(animatedPlaceholder, {
                toValue: 0,
                duration: 180,
                useNativeDriver: false,
            }).start();
        }
    };

    const placeholderTranslateY = animatedPlaceholder.interpolate({
        inputRange: [0, 1],
        outputRange: [-10, -40],
    });

    const placeholderScale = animatedPlaceholder.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
    });

    const placeholderColor = animatedPlaceholder.interpolate({
        inputRange: [0, 1],
        outputRange: ["#555", "#1F41BB"],
    });

    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.placeholder,
                    {
                        transform: [{ translateY: placeholderTranslateY }],
                        fontSize: placeholderScale,
                        color: placeholderColor,
                    },
                ]}
            >
                {placeHolder}
            </Animated.Text>

            <TextInput
                style={styles.textInput}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleTextChange}
                secureTextEntry={!passwordVisible && isPassword}
                value={value}
            />

            {isPassword && (
                <Ionicons
                    name={passwordVisible ? "eye-off" : "eye"}
                    color="#888"
                    size={25}
                    style={styles.toggleButton}
                    onPress={togglePasswordVisibility}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        position: "relative",
    },
    textInput: {
        borderBottomColor: "rgba(69,66,66,0.15)",
        borderBottomWidth: 1,
        color: "#333",
        fontFamily: "nunito-light",
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    placeholder: {
        fontFamily: "nunito-regular",
        left: 10,
        position: "absolute",
        top: 25,
    },
    toggleButton: {
        position: "absolute",
        right: 10,
        top: 15,
    },
});

export default Input;