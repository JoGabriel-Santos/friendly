import React from "react";
import { Image, ImageBackground, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>

            <ImageBackground
                source={require("../../utils/images/header-bg.png")}
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.profileImageView}>
                    <Image
                        source={require("../../utils/images/profile.png")}
                        style={styles.profileImage}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.editText}>Good morning, Gabriel!</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
};

export default Home;