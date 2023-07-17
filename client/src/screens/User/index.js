import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const User = () => {
    const [showFullBio, setShowFullBio] = useState(false);

    const bio = "If you don't have anything specific in mind, " +
        "tell me about your day, what you enjoy doing, " +
        "what makes you happy, or what your dreams are...";

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor="rgba(0,0,0,0.50)" barStyle="light-content" translucent={true}/>

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

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Ionicons
                            name={"arrow-back-outline"}
                            color={"white"}
                            size={30}
                        />
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <Text style={styles.userNameText}>João Gabriel</Text>
                    </View>
                </ImageBackground>

                <View style={styles.aboutUser}>
                    <Text style={styles.aboutUserText}>About João Gabriel</Text>
                </View>

                <View style={styles.bio}>
                    <Text style={styles.bioText} numberOfLines={showFullBio ? undefined : 3}>{bio}</Text>
                    {
                        !showFullBio && (
                            <TouchableOpacity
                                style={styles.buttonDesc}
                                onPress={() => setShowFullBio(true)}
                            >
                                <Text style={styles.buttonTextDesc}>See more</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={styles.viewUserContacts}>
                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            style={styles.contactIcon}
                            name={"videocam-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.contactText}>Video call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            style={styles.contactIcon}
                            name={"call-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.contactText}>Audio call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            style={styles.contactIcon}
                            name={"chatbubbles-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.contactText}>Message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            style={styles.contactIcon}
                            name={"person-add-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.contactText}>Add friend</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewUserInformation}>
                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"gift-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>Jan 20th (22)</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"male-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>Male</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"location-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>Brazil</Text>
                    </View>

                    <View style={styles.userInformation}>
                        <Ionicons
                            name={"map-outline"}
                            color={"#7c46fa"}
                            size={30}
                        />

                        <Text style={styles.infoText}>100km</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default User;