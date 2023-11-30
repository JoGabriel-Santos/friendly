import React from "react";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Letters = ({ route }) => {
    const navigation = useNavigation();

    const { penpalInfo } = route.params;

    const messages = [
        {
            id: '1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Jooe',
            time: 'Arrives in 2 hours',
        },
        {
            id: '2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Carlos',
            time: 'Arrives in 2 hours',
        },
        {
            id: '3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Gabriel',
            time: 'Arrives in 2 hours',
        },
        {
            id: '4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Sarah',
            time: 'Arrives in 2 hours',
        },
        {
            id: '5',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Luana',
            time: 'Arrives in 2 hours',
        },
        {
            id: '6',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
            sender: 'Frish',
            time: 'Arrives in 2 hours',
        },
    ];

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={styles.messageCard}
            onPress={() => navigation.navigate("Letter",
                { penpalInfo: penpalInfo, letterSender: item.sender, letterContent: item.content })
            }
        >
            <View style={styles.messageHeader}>
                <View style={styles.viewed}>
                    <Ionicons
                        name={"checkmark-done-outline"}
                        color={"#333"}
                        size={25}
                    />
                </View>

                <View style={{ flex: 1 }}/>

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
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.writeLetter}
                onPress={() => navigation.navigate("Letter",
                    { penpalInfo: penpalInfo, letterSender: "", letterContent: "" })
                }>
                <Text style={styles.writeLetterText}>
                    Write a letter
                </Text>
            </TouchableOpacity>

            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

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

            <TouchableOpacity
                style={styles.viewUserInfo}
                onPress={() => navigation.navigate("User",
                    { userEmail: penpalInfo.email, penpalInfo: penpalInfo, fromLetters: true })
                }
            >
                <Image
                    source={{ uri: penpalInfo.picture }}
                    style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>
                        {penpalInfo.name}
                    </Text>
                </View>
            </TouchableOpacity>

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

export default Letters;