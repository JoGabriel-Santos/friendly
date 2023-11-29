import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as API from "../../api";
import styles from "./styles";

const Notifications = () => {
    const navigation = useNavigation();

    const [pendingRequests, setPendingRequests] = useState();

    const handleFriendRequest = async (userInfoID, acceptRequest) => {
        const userLogged = await AsyncStorage.getItem("userInfo");
        const userLoggedJSON = JSON.parse(userLogged);

        try {
            await API.handleFriendRequest({ userId: userLoggedJSON._id, senderId: userInfoID, acceptRequest: acceptRequest });
            navigation.navigate("Friends");

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    useEffect(() => {
        const checkPendingRequests = async () => {
            const userLogged = await AsyncStorage.getItem("userInfo");
            const userLoggedJSON = JSON.parse(userLogged);

            try {
                const { data } = await API.getPendingRequests(userLoggedJSON.email);
                setPendingRequests(data.receivedRequests);

            } catch (error) {
                console.log("An error occurred: ", error);
            }
        };

        checkPendingRequests();
    }, []);

    const renderCard = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={
                    () => navigation.navigate("User", { userEmail: item.fromUser.email })
                }
            >
                <View style={styles.viewUserInfo}>
                    <Image source={{ uri: item.fromUser.picture }} style={styles.userImage}/>
                    <View>
                        <Text style={styles.userName}>
                            {item.fromUser.name}
                        </Text>
                        <Text style={styles.userCountry}>
                            {item.fromUser.country}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.acceptButton}
                        onPress={() => handleFriendRequest(item.fromUser._id, true)}
                    >
                        <Text style={styles.buttonText}>Accept</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.rejectButton}
                        onPress={() => handleFriendRequest(item.fromUser._id, false)}
                    >
                        <Text style={styles.buttonText}>Reject</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    };

    if (!pendingRequests) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ paddingTop: 50 }}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.notificationsHeader}>
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

                    <Text style={styles.headerText}>Notifications</Text>
                </View>
            </View>

            <FlatList
                data={pendingRequests}
                renderItem={renderCard}
                keyExtractor={(item) => item.fromUser._id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

export default Notifications;