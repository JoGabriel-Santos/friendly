import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import topics from "../utils/topics";

const Topics = ({ route }) => {
    const navigation = useNavigation();

    const { handleSavingData, userData } = route.params;

    const [selectedTopics, setSelectedTopics] = useState(userData.topics || []);

    const handleSelectTopic = (topic) => {
        const isTopicSelected = selectedTopics.find((selectedTopic) => selectedTopic.id === topic.id);

        if (isTopicSelected) {
            const updatedSelectedTopics = selectedTopics.filter((selectedTopic) => selectedTopic.id !== topic.id);

            setSelectedTopics(updatedSelectedTopics);

        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    }

    const renderCard = ({ item }) => {
        const isTopicSelected = selectedTopics.find((selectedTopic) => selectedTopic.id === item.id);

        return (
            <TouchableOpacity style={styles.card} onPress={() => handleSelectTopic(item)}>
                <View style={styles.topicInfo}>
                    <Text style={[styles.topicName, isTopicSelected ? { color: "#7c46fa" } : { color: "#333" }]}>
                        {item.topicName}
                    </Text>

                    {
                        !isTopicSelected ? (
                            <Ionicons
                                name={"add-outline"}
                                color={isTopicSelected ? "#7c46fa" : "#333"}
                                size={25}
                            />
                        ) : (
                            <Ionicons
                                name={"checkmark-outline"}
                                color={isTopicSelected ? "#7c46fa" : "#333"}
                                size={25}
                            />
                        )
                    }
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.topicsHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("OtherInformation")}
                    >
                        <Ionicons name={"arrow-back-outline"} color={"#333"} size={30}/>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Topics of interest</Text>
                </View>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                        handleSavingData("topics", selectedTopics, userData);
                        navigation.navigate("OtherInformation");
                    }}
                >
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={topics}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
    },
    topicsHeader: {
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
    listContainer: {
        paddingVertical: 20,
    },
    card: {
        borderBottomColor: "rgba(51,51,51,0.2)",
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    topicInfo: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topicName: {
        fontFamily: "nunito-regular",
        fontSize: 20,
    },
});

export default Topics;