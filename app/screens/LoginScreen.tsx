import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulated login check
    if (email && password) {
      console.log('Logging in with:', email, password);
      Alert.alert('Login Success', 'Welcome to OutfitFlex!');
      // Navigate to next screen here
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-3xl font-bold mb-6 text-blue-600">OutfitFlex</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-6"
        secureTextEntry
      />
      
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 rounded px-6 py-2"
      >
        <Text className="text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
