import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const User = () => {
    const navigation = useNavigation();

    const [showFullBio, setShowFullBio] = useState(false);

    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" +
        " ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
        " in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
        " officia deserunt mollit anim id est laborum.";

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
                        <Text style={styles.userNameText}>Cleitin</Text>
                    </View>
                </ImageBackground>

                <View style={styles.aboutUser}>
                    <Text style={styles.aboutUserText}>About Cleitin</Text>
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
                            name={"person-add-outline"}
                            color={"#333"}
                            size={28}
                        />

                        <Text style={styles.contactText}>Add friend</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            name={"call-outline"}
                            color={"#333"}
                            size={28}
                        />

                        <Text style={styles.contactText}>Audio call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            name={"videocam-outline"}
                            color={"#333"}
                            size={28}
                        />

                        <Text style={styles.contactText}>Video call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userContacts}>
                        <Ionicons
                            name={"chatbubbles-outline"}
                            color={"#333"}
                            size={28}
                        />

                        <Text style={styles.contactText}>Message</Text>
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

                <View style={styles.viewTopics}>
                    <Text style={styles.aboutUserText}>Topics of interests</Text>

                    <View style={styles.topics}>
                        <Text style={styles.commonTopic}>Animals</Text>
                        <Text style={styles.commonTopic}>Books</Text>
                        <Text style={styles.commonTopic}>Coding</Text>
                        <Text style={styles.commonTopic}>Gaming</Text>
                        <Text style={styles.commonTopic}>Music</Text>
                        <Text style={styles.commonTopic}>Science</Text>
                        <Text style={styles.commonTopic}>Technology</Text>
                        <Text style={styles.uncommonTopic}>Travel</Text>
                        <Text style={styles.uncommonTopic}>Writing</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default User;