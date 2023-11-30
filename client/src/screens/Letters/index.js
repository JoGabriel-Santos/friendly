import React from "react";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Friends = () => {
    const navigation = useNavigation();

    const messages = [
        {
            id: '1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Me',
            time: 'Arrives in 2 hours',
        },
        {
            id: '2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Me',
            time: 'Arrives in 2 hours',
        },
        {
            id: '3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Me',
            time: 'Arrives in 2 hours',
        },
        {
            id: '4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Me',
            time: 'Arrives in 2 hours',
        },
        {
            id: '5',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Me',
            time: 'Arrives in 2 hours',
        },
        {
            id: '6',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Me',
            time: 'Arrives in 2 hours',
        },
    ];

    const renderCard = ({ item }) => (
        <View style={styles.messageCard}>
            <View style={styles.messageHeader}>
                <View style={styles.viewed}>
                    <Ionicons
                        name={"checkmark-done-outline"}
                        color={"#333"}
                        size={25}
                    />
                </View>

                <View style={{ flex: 1 }} />

                <Image
                    source={require("../../utils/images/christ-the-redeemer.png")}
                    style={styles.stamp}
                />
            </View>

            <View style={styles.messageContent}>
                <Text style={styles.content} numberOfLines={4}>
                    {item.content}
                </Text>
            </View>

            <View style={styles.messageUserInfo}>
                <Text style={styles.userInfoSender}>{item.sender}</Text>
                <Text style={styles.userInfoTime}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.writeLetter}>
                <Text style={styles.writeLetterText}>
                    Write a letter
                </Text>
            </TouchableOpacity>

            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />

            <View style={styles.lettersHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons
                            name={"arrow-back-outline"}
                            color={"#333"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Letters</Text>
                </View>
            </View>

            <View style={styles.viewUserInfo}>
                <Image
                    source={require("../../utils/images/background.png")}
                    style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>
                        João Gabriel
                    </Text>
                </View>
            </View>

            <FlatList
                data={messages}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={{ padding: 10, paddingBottom: 60 }}
            />
        </SafeAreaView>
    );
};

export default Friends;
