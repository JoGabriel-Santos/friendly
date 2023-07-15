import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import styles from "./styles";

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                    <TouchableOpacity style={styles.photoButton}>
                        <Ionicons name={"camera-outline"} color={"white"} size={20}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.editText}>Edit profile</Text>
                </View>

                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name={"arrow-back-outline"} color={"white"} size={30}/>
                </TouchableOpacity>
            </ImageBackground>


            <View style={styles.containerEdit}>
                <View style={styles.inputField}>
                    <Input placeHolder="Nome" onChangeText={handleNameChange} value={name}/>
                    <Input placeHolder="Email" onChangeText={handleEmailChange} value={email}/>
                    <Input placeHolder="Senha" onChangeText={handlePasswordChange} value={password}/>
                </View>
            </View>

            <View style={styles.viewSaveButton}>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>
                        Save changes
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default Profile;