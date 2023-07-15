import React, { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, View, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/Input";
// import * as API from "../../api/index";
import styles from "./styles";

const Authentication = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const route = useRoute();
    const navigation = useNavigation();

    const { authType } = route.params;

    const [isLoggingIn, setIsLoggingIn] = useState(authType === "login");

    const handleAuthentication = async () => {
        const userInfo = { name, email: "jgabriel.personal@gmail.com", password: "pass" };

        if (isLoggingIn) {
            // const { data } = await API.signin(userInfo);
            // await AsyncStorage.setItem("userInfo", JSON.stringify(data.result));

        } else {
            // const { data } = await API.signup(userInfo);
            // await AsyncStorage.setItem("userInfo", JSON.stringify(data.result));

            navigation.navigate("Home");
        }
    }

    const handleNameChange = (text) => {
        setName(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleToggleIsLoggingIn = () => {
        setName("");
        setEmail("");
        setPassword("");

        setIsLoggingIn(prevIsLoggingIn => !prevIsLoggingIn);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.authView}>
                <View style={styles.header}>
                    {
                        isLoggingIn ?
                            <React.Fragment>
                                <Text style={styles.authText}>Login here</Text>
                                <Text style={styles.sloganText}>Welcome back you've been missed!</Text>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Text style={styles.authText}>Create an account</Text>
                                <Text style={styles.sloganText}>Sign up for an account so you can find friends.</Text>
                            </React.Fragment>
                    }
                </View>

                <View style={styles.inputField}>
                    {!isLoggingIn &&
                        <Input placeHolder="Nome" onChangeText={handleNameChange} value={name}/>}
                    <Input placeHolder="Email" onChangeText={handleEmailChange} value={email}/>
                    <Input placeHolder="Senha" onChangeText={handlePasswordChange} value={password}/>
                </View>

                {
                    isLoggingIn &&
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity style={styles.signinButton} onPress={() => handleAuthentication()}>
                    <Text style={styles.signinText}>
                        {isLoggingIn ? "Login" : "Create account"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} onPress={() => handleToggleIsLoggingIn()}>
                    <Text style={styles.signupText}>
                        {isLoggingIn ? "Create new account" : "Sign in to an existing account"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.loginAlternatives}>
                <Text style={styles.continueWithText}>
                    Or continue with
                </Text>

                <View style={styles.loginButtons}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Ionicons name={"logo-google"} size={22}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Ionicons name={"logo-facebook"} size={22}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton}>
                        <Ionicons name={"logo-apple"} size={22}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Authentication;