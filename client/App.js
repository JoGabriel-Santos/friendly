import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Welcome from "./src/screens/Welcome";
import Authentication from "./src/screens/Authentication";
import Home from "./src/screens/Home";
import Community from "./src/screens/Community";
import Profile from "./src/screens/Profile";
import Topics from "./src/components/Topics";
import Navbar from "./src/components/Navbar";
import configFonts from "./src/utils/configFonts";

const Stack = createStackNavigator();

function App() {
    const [fontsLoader] = useFonts(configFonts);

    return !fontsLoader ? null : (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Authentication" component={Authentication}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Community" component={Community}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Topics" component={Topics}/>
            </Stack.Navigator>

            <Navbar/>
        </NavigationContainer>
    )
}

export default App;