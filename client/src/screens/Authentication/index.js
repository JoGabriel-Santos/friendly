import React, { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, View, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/Input";
import * as API from "../../api/index";
import styles from "./styles";

const Authentication = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { authType } = route.params;

    const [isLoggingIn, setIsLoggingIn] = useState(authType === "login");
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });

    const handleAuthentication = async () => {
        const { data } = isLoggingIn ? await API.signin(userInfo) : await API.signup(userInfo);
        await AsyncStorage.setItem("userInfo", JSON.stringify(data.result));

        navigation.navigate(isLoggingIn ? "Home" : "Profile");
    };

    const handleChange = (key, text) => {
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [key]: text }));
    };

    const handleToggleIsLoggingIn = () => {
        setUserInfo({ name: '', email: '', password: '' });
        setIsLoggingIn((prevIsLoggingIn) => !prevIsLoggingIn);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true}/>

            <View style={styles.authView}>
                <View style={styles.header}>
                    <Text style={styles.authText}>
                        {
                            isLoggingIn ? "Login here" : "Create an account"
                        }
                    </Text>

                    <Text style={styles.sloganText}>
                        {
                            isLoggingIn
                                ? "Welcome back! Your friends are waiting for you"
                                : "Sign up for an account so you can find friends"
                        }
                    </Text>
                </View>

                <View style={styles.inputField}>
                    {
                        !isLoggingIn &&
                        <Input placeHolder="Name" onChangeText={(text) => handleChange("name", text)} value={userInfo.name}/>
                    }
                    <Input placeHolder="Email" onChangeText={(text) => handleChange("email", text)} value={userInfo.email}/>
                    <Input placeHolder="Password" onChangeText={(text) => handleChange("password", text)} value={userInfo.password}/>
                </View>

                {
                    isLoggingIn && (
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                        </TouchableOpacity>
                    )
                }

                <TouchableOpacity style={styles.signinButton} onPress={handleAuthentication}>
                    <Text style={styles.signinText}>
                        {
                            isLoggingIn ? "Login" : "Create account"
                        }
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton} onPress={handleToggleIsLoggingIn}>
                    <Text style={styles.signupText}>
                        {
                            isLoggingIn ? "Create new account" : "Sign in to an existing account"
                        }
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.loginAlternatives}>
                <Text style={styles.continueWithText}>Or continue with</Text>

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
    );
};

export default Authentication;