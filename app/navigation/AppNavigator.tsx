// app/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BottomTabNavigator from './BottomTabNavigator'; // 👈 Make sure this is imported
import AddOutfitScreen from '../screens/AddOutfitScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} /> 
        <Stack.Screen name="AddOutfit" component={AddOutfitScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
