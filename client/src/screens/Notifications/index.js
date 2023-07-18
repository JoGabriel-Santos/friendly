import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Notifications = () => {

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


        </SafeAreaView>
    );
};

export default Notifications;