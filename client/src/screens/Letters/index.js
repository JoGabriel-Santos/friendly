import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { letterInfo } from "../../helpers/letterInfo";
import * as API from "../../api";
import styles from "./styles";

const Letters = ({ route }) => {
    const navigation = useNavigation();

    const { penpalInfo } = route.params;

    const [allLetters, setAllLetters] = useState();
    const [fetchDataInterval, setFetchDataInterval] = useState(null);

    const getLettersBetweenPenpals = async () => {
        const userLogged = await AsyncStorage.getItem("userInfo");
        const userLoggedJSON = JSON.parse(userLogged);

        try {
            const { data } = await API.lettersBetweenPenpals({ penpal1Id: userLoggedJSON._id, penpal2Id: penpalInfo._id });
            setAllLetters(data.letters);

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    function checkArrivalDate(dateString) {
        const targetDateMoment = moment(dateString, 'dddd, MMMM DD, HH:mm');
        const targetDate = targetDateMoment.subtract(3, 'hours');

        if (!targetDate.isValid()) {
            return "Invalid date";
        }

        const currentDateMoment = moment();
        const currentDate = currentDateMoment.subtract(3, 'hours');

        return letterInfo(currentDate, targetDate);
    }

    useEffect(() => {
        const fetchData = async () => {
            await getLettersBetweenPenpals();
        };

        fetchData();

        const intervalId = setInterval(fetchData, 30000);
        setFetchDataInterval(intervalId);

        return () => {
            if (fetchDataInterval) {
                clearInterval(fetchDataInterval);
            }
        };
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getLettersBetweenPenpals();
        }, [])
    );

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
                <Text style={styles.userInfoTime}>{checkArrivalDate(item.time)}</Text>
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
                        onPress={() => navigation.navigate("Friends")}
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

                    <Text style={styles.userDescription} numberOfLines={2}>
                        {penpalInfo.description}
                    </Text>
                </View>
            </TouchableOpacity>

            <FlatList
                data={allLetters}
                renderItem={renderCard}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={{ padding: 10, paddingBottom: 60 }}
            />
        </SafeAreaView>
    );
};

export default Letters;