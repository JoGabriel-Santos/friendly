import React from "react";
import { ImageBackground, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>

            <ImageBackground source={require("../../utils/images/background.png")} style={styles.backgroundImage}>

                <View>
                    <ImageBackground
                        source={require("../../utils/images/welcome-image.png")}
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
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Welcome;