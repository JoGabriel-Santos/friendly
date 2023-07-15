import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Matching from "../../components/Matching";
import styles from "./styles";

const Community = () => {
    const userData = [
        { id: 1, picture: require("../../utils/images/profile.png") },
        { id: 2, picture: require("../../utils/images/profile.png") },
        { id: 3, picture: require("../../utils/images/profile.png") },
        { id: 4, picture: require("../../utils/images/profile.png") },
        { id: 5, picture: require("../../utils/images/profile.png") },
        { id: 6, picture: require("../../utils/images/profile.png") },
        { id: 7, picture: require("../../utils/images/profile.png") },
        { id: 8, picture: require("../../utils/images/profile.png") },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.communityHeader}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity>
                        <Ionicons name={"arrow-back-outline"} color={"#333"} size={30}/>
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Matches</Text>
                </View>

                <TouchableOpacity>
                    <Ionicons name={"options-outline"} color={"#333"} size={30}/>
                </TouchableOpacity>
            </View>

            <Matching userData={userData}/>
        </SafeAreaView>
    )
};

export default Community;