// app/screens/AddOutfitScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const AddOutfitScreen = () => {
  const [name, setName] = useState('');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [occasion, setOccasion] = useState('');
  const [season, setSeason] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'We need access to your gallery.');
      return;
    }

   const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  quality: 0.7,
});

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!name || !top || !bottom || !occasion || !season || !imageUri) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Logic to save outfit (e.g., API call or AsyncStorage)
    Alert.alert('Outfit Added', `${name} saved successfully`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add New Outfit</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <>
            <Ionicons name="image-outline" size={48} color="#ccc" />
            <Text style={styles.imagePickerText}>Tap to upload outfit image</Text>
          </>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Outfit Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Weekend Casual"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Topwear</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. White Tee"
        value={top}
        onChangeText={setTop}
      />

      <Text style={styles.label}>Bottomwear</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Blue Jeans"
        value={bottom}
        onChangeText={setBottom}
      />

      <Text style={styles.label}>Occasion</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={occasion} onValueChange={setOccasion}>
          <Picker.Item label="Select occasion" value="" />
          <Picker.Item label="Casual" value="Casual" />
          <Picker.Item label="Formal" value="Formal" />
          <Picker.Item label="Party" value="Party" />
          <Picker.Item label="Work" value="Work" />
        </Picker>
      </View>

      <Text style={styles.label}>Season</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={season} onValueChange={setSeason}>
          <Picker.Item label="Select season" value="" />
          <Picker.Item label="Spring" value="Spring" />
          <Picker.Item label="Summer" value="Summer" />
          <Picker.Item label="Fall" value="Fall" />
          <Picker.Item label="Winter" value="Winter" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Add to Wardrobe</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F3E8FF' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#44317f' },
  label: { fontSize: 16, marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
  },
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  imagePickerText: { marginTop: 8, color: '#777' },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  saveButton: {
    backgroundColor: '#9B6EF3',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddOutfitScreen;
