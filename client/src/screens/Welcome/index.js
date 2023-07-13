import React from "react";
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground
                    source={require("../../utils/images/welcome-img.png")}
                    style={styles.welcomeImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.viewDescription}>
                <Text style={styles.homeTitle}>
                    Unlock the power of English conversations
                </Text>

                <Text style={styles.homeParagraph}>
                    Join our community of English learners and take your speaking skills to the next level
                </Text>
            </View>

            <View style={styles.viewButtons}>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Authentication", { authType: "login" })}
                >

                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate("Authentication", { authType: "register" })}
                >

                    <Text style={styles.buttonTextRegister}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Welcome;