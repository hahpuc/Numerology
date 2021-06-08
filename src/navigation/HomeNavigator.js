import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/HomeScreen/Home';
import { SettingScreen } from '../screens/HomeScreen/SettingScreen';

const Stack = createStackNavigator()

export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator