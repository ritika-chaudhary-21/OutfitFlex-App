// app/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const categories = {
  gender: ['Male', 'Female', 'Non-Binary', 'Prefer not to say'],
  bodyTypes: ['Rectangle', 'Hourglass', 'Pear', 'Apple'],
  fitPrefs: ['Tight / Fitted', 'Regular / Standard', 'Loose / Relaxed', 'Oversized'],
  stylePrefs: [
    'Casual', 'Formal', 'Streetwear', 'Minimalist',
    'Vintage', 'Bohemian', 'Athletic', 'Business'
  ],
};

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [fitPref, setFitPref] = useState('');
  const [stylePrefs, setStylePrefs] = useState<string[]>([]);

  const toggleStylePref = (pref: string) => {
    setStylePrefs((prev) =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    );
  };

  const handleSignUp = () => {
    const userData = {
      nickname,
      email,
      password,
      gender,
      bodyType,
      fitPref,
      stylePrefs,
    };
    console.log('Signing up with:', userData);
    navigation.navigate('Main');
  };

  const renderOptions = (
    options: string[],
    selected: string,
    setSelected: (val: string) => void
  ) => (
    <View style={styles.optionContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.optionButton, selected === option && styles.optionSelected]}
          onPress={() => setSelected(option)}
        >
          <Text style={selected === option ? styles.optionSelectedText : styles.optionText}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderMultiSelect = (
    options: string[],
    selectedList: string[],
    toggleFn: (val: string) => void
  ) => (
    <View style={styles.optionContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedList.includes(option) && styles.optionSelected
          ]}
          onPress={() => toggleFn(option)}
        >
          <Text
            style={
              selectedList.includes(option) ? styles.optionSelectedText : styles.optionText
            }
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Personalize your outfit recommendations</Text>

      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />

      <TextInput
        style={styles.input}
        placeholder="Gmail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Gender</Text>
      {renderOptions(categories.gender, gender, setGender)}

      <Text style={styles.label}>Body Type</Text>
      {renderOptions(categories.bodyTypes, bodyType, setBodyType)}

      <Text style={styles.label}>Clothing Fit Preference</Text>
      {renderOptions(categories.fitPrefs, fitPref, setFitPref)}

      <Text style={styles.label}>Style Preferences (you can choose multiple)</Text>
      {renderMultiSelect(categories.stylePrefs, stylePrefs, toggleStylePref)}


      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    margin: 4,
  },
  optionSelected: {
    backgroundColor: '#9B6EF3',
    borderColor: '#9B6EF3',
  },
  optionText: {
    color: '#333',
  },
  optionSelectedText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#9B6EF3',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignUpScreen;
