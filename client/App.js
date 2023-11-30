import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Welcome from "./src/screens/Welcome";
import Authentication from "./src/screens/Authentication";
import CreateAccount from "./src/components/Create account/CreateAccount";
import SelectProficiency from "./src/components/Create account/SelectProficiency";
import OtherInformation from "./src/components/Create account/OtherInformation";
import Home from "./src/screens/Home";
import Friends from "./src/screens/Friends";
import Letters from "./src/screens/Letters";
import Community from "./src/screens/Community";
import Filters from "./src/components/Filters";
import Notifications from "./src/screens/Notifications";
import User from "./src/screens/User";
import Proficiency from "./src/components/Proficiency";
import Topics from "./src/components/Topics";
import Description from "./src/components/Description";
import Letter from "./src/components/Letter";
import Navbar from "./src/components/Navbar";
import configFonts from "./src/utils/configFonts";

const Stack = createStackNavigator();

function App() {
    const [fontsLoader] = useFonts(configFonts);

    return !fontsLoader ? null : (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Friends" component={Friends}/>
                <Stack.Screen name="Letters" component={Letters}/>
                <Stack.Screen name="Community" component={Community}/>
                <Stack.Screen name="Filters" component={Filters}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
                <Stack.Screen name="User" component={User}/>
                <Stack.Screen name="Proficiency" component={Proficiency}/>
                <Stack.Screen name="Topics" component={Topics}/>
                <Stack.Screen name="Description" component={Description}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Authentication" component={Authentication}/>
                <Stack.Screen name="CreateAccount" component={CreateAccount}/>
                <Stack.Screen name="SelectProficiency" component={SelectProficiency}/>
                <Stack.Screen name="OtherInformation" component={OtherInformation}/>
                <Stack.Screen name="Letter" component={Letter}/>
            </Stack.Navigator>

            <Navbar/>
        </NavigationContainer>
    );
}

export default App;