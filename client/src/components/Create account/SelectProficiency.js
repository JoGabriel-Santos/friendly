import React, { useState } from "react";
import { Modal, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SelectProficiency = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [languages, setLanguages] = useState([
        "Afrikaans",
        "Azərbaycan dili (Azerbaijani)",
        "বাংলা (Bengali)",
        "български (Bulgarian)",
        "Català (Catalan)",
        "Čeština (Czech)",
        "Dansk (Danish)",
        "Deutsch (German)",
        "Ελληνικά (Greek)",
        "English",
        "Español (Spanish)",
        "Filipino",
        "Français (French)",
        "हिन्दी (Hindi)",
        "Magyar (Hungarian)",
        "Bahasa Indonesia (Indonesian)",
        "Italiano (Italian)",
        "日本語 (Japanese)",
        "한국어 (Korean)",
        "普通话 (Mandarin Chinese)",
        "Kiswahili (Swahili)",
        "Bahasa Melayu (Malay)",
        "Nederlands (Dutch)",
        "Norsk (Norwegian)",
        "Polski (Polish)",
        "Português (Portuguese)",
        "Română (Romanian)",
        "русский (Russian)",
        "Svenska (Swedish)",
        "Suomi (Finnish)",
        "ภาษาไทย (Thai)",
        "தமிழ் (Tamil)",
        "Türkçe (Turkish)",
        "Tiếng Việt (Vietnamese)",
    ]);

    const proficiencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent", "Native"];

    const handleLanguageSelect = (languageName, selectedLevel) => {

        setSelectedLanguages(prevSelectedLanguages => [
            ...prevSelectedLanguages, [languageName, selectedLevel]
        ]);
    };

    const handleRemoveLanguage = (languageName) => {
        const updatedLanguages = selectedLanguages.filter(([language]) => language !== languageName);
        setSelectedLanguages(updatedLanguages);
    };

    const handleToggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.createAccountView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>
                        Select the languages you speak
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.languageSelector}
                    onPress={handleToggleModal}
                >
                    <Text style={styles.languageSelectorText}>
                        Select a language
                    </Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    visible={isModalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        <ScrollView style={styles.optionsScrollView}>
                            {
                                languages.map((languageName) => (
                                    <TouchableOpacity
                                        key={languageName}
                                        style={[
                                            styles.optionItem,
                                            selectedLanguages.some(([language]) => language === languageName) && {
                                                backgroundColor: "#7c46fa",
                                            },
                                        ]}
                                        onPress={() => {
                                            const isLanguageSelected = selectedLanguages.some(([language]) => language === languageName);

                                            if (isLanguageSelected) {
                                                handleRemoveLanguage(languageName);

                                            } else {
                                                handleToggleModal();

                                                setTimeout(() => {
                                                    navigation.navigate("Proficiency",
                                                        { selectedOptions: selectedLanguages, languageName, handleLanguageSelect });
                                                }, 500);
                                            }
                                        }}
                                    >
                                        <Text
                                            style={[
                                                styles.optionText,
                                                selectedLanguages.some(([language]) => language === languageName) && {
                                                    color: "white",
                                                },
                                            ]}
                                        >
                                            {languageName}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>

                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={handleToggleModal}
                        >
                            <Text style={styles.closeButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>

            <View style={styles.selectedOptionsContainer}>
                <Text style={styles.selectedOptionsLabel}>Selected Languages:</Text>

                <ScrollView style={styles.selectedOptionsScrollView}>
                    {
                        selectedLanguages.map(([language, proficiency], index) => (
                            <View key={index} style={styles.selectedOptionItem}>
                                <Text style={styles.selectedOptionText}>{language}</Text>
                                <View style={styles.indicator}>
                                    {
                                        proficiencyLevels.map((level, index) => (
                                            <Ionicons
                                                key={index}
                                                name={index - 1 < proficiencyLevels.indexOf(proficiency)
                                                    ? "radio-button-on-outline" : "radio-button-off-outline"}
                                                color={"#333"}
                                                size={12}
                                            />
                                        ))
                                    }
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={styles.nextScreenView}>
                <TouchableOpacity
                    style={styles.nextScreen}
                >
                    <Text style={styles.nextScreenText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        paddingHorizontal: 20,
    },
    createAccountView: {
        alignItems: "center",
        paddingVertical: 50,
    },
    header: {
        alignItems: "center",
    },
    authText: {
        color: "#7c46fa",
        fontFamily: "nunito-extraBold",
        fontSize: 35,
        marginVertical: 30,
        textAlign: "center",
    },
    languageSelector: {
        alignItems: "center",
        borderColor: "#7c46fa",
        borderRadius: 8,
        borderWidth: 1,
        padding: 15,
        marginVertical: 20,
        width: "100%",
    },
    languageSelectorText: {
        color: "#7c46fa",
        fontFamily: "nunito-bold",
        fontSize: 16,
    },
    selectedOptionsContainer: {
        alignItems: "flex-start",
        alignSelf: "flex-start",
        width: "100%",
    },
    selectedOptionsLabel: {
        color: "#333",
        fontFamily: "nunito-bold",
        fontSize: 16,
        marginBottom: 5,
    },
    selectedOptionsScrollView: {
        maxHeight: 430,
        width: "100%",
    },
    selectedOptionItem: {
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        marginVertical: 5,
    },
    selectedOptionText: {
        fontSize: 16,
    },
    indicator: {
        flexDirection: "row",
        marginTop: 5,
    },
    modalView: {
        backgroundColor: "white",
        padding: 20,
        margin: 20,
        borderRadius: 10,
        elevation: 5,
    },
    optionsScrollView: {
        maxHeight: 500,
    },
    optionItem: {
        alignItems: "center",
        borderColor: "#7c46fa",
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 8,
        padding: 15,
    },
    optionText: {
        color: "#7c46fa",
        fontFamily: "nunito-bold",
        fontSize: 16,
    },
    closeButton: {
        alignItems: "center",
        backgroundColor: "#7c46fa",
        borderRadius: 8,
        padding: 15,
        marginTop: 10,
    },
    closeButtonText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 16,
    },
    nextScreenView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    nextScreen: {
        backgroundColor: "#7c46fa",
        borderRadius: 100,
        marginBottom: 30,
        padding: 18,
        width: "100%",
    },
    nextScreenText: {
        color: "white",
        fontFamily: "nunito-bold",
        fontSize: 20,
        textAlign: "center",
    },
});

export default SelectProficiency;