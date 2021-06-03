import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { BirthChartScreen } from '../screens/BirthChartScreen/BirthChartScreen';
import { BirthChartResultScreen } from '../screens/BirthChartScreen/BirthChartResultScreen';

const Stack = createStackNavigator()

export const BirthChartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="BirthChart"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="BirthChart" component={BirthChartScreen} />
            <Stack.Screen name="BirthChartResult" component={BirthChartResultScreen} />
        </Stack.Navigator>
    )
}

export default BirthChartNavigator