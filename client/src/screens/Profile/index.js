import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import styles from "./styles";

const Profile = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

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

                        <TouchableOpacity style={styles.photoButton}>
                            <Ionicons name={"camera-outline"} color={"white"} size={20}/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
                        <Ionicons name={"arrow-back-outline"} color={"white"} size={30}/>
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <Text style={styles.editText}>Edit profile</Text>
                    </View>

                    <View style={styles.viewSaveButton}>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={styles.containerEdit}>
                    <View style={styles.inputField}>
                        <Input placeHolder="Nome" onChangeText={handleNameChange} value={name}/>
                        <Input placeHolder="Email" onChangeText={handleEmailChange} value={email}/>
                        <Input placeHolder="Senha" onChangeText={handlePasswordChange} value={password}/>
                    </View>
                </View>

                <View style={styles.viewButtons}>
                    <TouchableOpacity style={styles.buttonInterests} onPress={() => navigation.navigate("Topics")}>
                        <Text style={styles.buttonTextInterests}>Topics of interest</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDesc}>
                        <Text style={styles.buttonTextDesc}>Description</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};

export default Profile;