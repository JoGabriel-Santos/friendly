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

            <ImageBackground
                source={require("../../utils/images/home-image.png")}
                style={styles.homeImage}
                resizeMode="contain"
            />

            <View style={styles.meetPeopleView}>
                <Text style={styles.meetPeopleTitle}>Ready to meed a new friend?</Text>
                <Text style={styles.meetPeopleDescr}>Start connecting with the world on Friendly</Text>
            </View>

            <View style={styles.meetPeopleButtons}>
                <TouchableOpacity style={[styles.meetPeopleButton, styles.automatchButton]}>
                    <Text style={[styles.meetPeopleText, styles.automatchText]}>
                        Auto-match
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.meetPeopleButton, styles.manuallyButton]}>
                    <Text style={[styles.meetPeopleText, styles.manuallyText]}>
                        Explore manually
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewNavbar}>
                <View style={styles.navbar}>
                    <TouchableOpacity>
                        <Ionicons name={"grid-outline"} color={"white"} size={25}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name={"people-outline"} color={"white"} size={25}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name={"search-outline"} color={"white"} size={25}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name={"person-outline"} color={"white"} size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Home;