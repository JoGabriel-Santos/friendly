import React from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/Welcome";
import Authentication from "./src/screens/Authentication";

import configFonts from "./src/utils/configFonts";

const Stack = createStackNavigator();

function App() {
    const [fontsLoader] = useFonts(configFonts);

    return !fontsLoader ? null : (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Authentication" component={Authentication}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;