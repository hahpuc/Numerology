import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { PyramidPeak } from '../screens/PyramidPeak/PyramidPeak';

const Stack = createStackNavigator()

export const PyramidPeakNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="PyramidPeak"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="PyramidPeak" component={PyramidPeak} />
        </Stack.Navigator>
    )
}

export default PyramidPeakNavigator