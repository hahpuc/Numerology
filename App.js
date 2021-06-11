import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Screens
// import { PlantDetail } from './screens/';
import Tabs from './src/navigation/tabs';
import { BirthChartScreen } from './src/screens/BirthChartScreen/BirthChartScreen';
import { View } from 'react-native';
import { InputScreen } from './src/screens/InputScreen/InputScreen';

// Tabs
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <InputScreen /> */}
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
