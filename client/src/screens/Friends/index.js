import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as API from "../../api";
import styles from "./styles";

const Friends = () => {
    const navigation = useNavigation();

    const [penpals, setPenpals] = useState();

    const fetchPenpals = async () => {
        const userLogged = await AsyncStorage.getItem("userInfo");
        const userLoggedJSON = JSON.parse(userLogged);

        try {
            const { data } = await API.fetchPenpals(userLoggedJSON._id);

            const combinedPenpals = [...data.sentRequests, ...data.penpals];
            setPenpals(combinedPenpals);

        } catch (error) {
            console.log("An error occurred: ", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchPenpals();
        }, [])
    );

    const renderCard = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("Letters",
                    { penpalInfo: item })
                }
                disabled={item.status === "pending"}
            >
                <View style={styles.viewUserInfo}>
                    <Image
                        source={{ uri: item.picture || item.toUser.picture }}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.userName}>
                            {item.name || item.toUser.name}
                        </Text>

                        <Text style={styles.userCountry}>
                            {item.country || item.toUser.country}
                        </Text>
                    </View>
                </View>

                {
                    item.status === "pending" &&
                    (
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Pending</Text>
                        </View>
                    )
                }
            </TouchableOpacity>
        )
    };

    if (!penpals) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ paddingTop: 50 }}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.friendsHeader}>
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

                    <Text style={styles.headerText}>Friends</Text>
                </View>
            </View>

            {penpals.length > 0 ? (
                <FlatList
                    data={penpals}
                    renderItem={renderCard}
                    keyExtractor={(item) => item._id.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            ) : (
                <View style={styles.emptySearchContainer}>
                    <Text style={styles.emptySearchText}>No friends at the moment...</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Friends;