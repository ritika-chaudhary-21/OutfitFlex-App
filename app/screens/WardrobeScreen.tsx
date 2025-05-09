// app/screens/WardrobeScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type ClothingItem = {
  id: string;
  name: string;
  image: { uri: string } | number;
};

type ClothingData = {
  [key: string]: ClothingItem[];
};

const initialDummyData: ClothingData = {
  Topwear: [
    { id: '1', name: 'Blue Shirt', image: require('../../assets/dummy/top1.jpg') },
    { id: '2', name: 'Pink Crop', image: require('../../assets/dummy/top2.jpeg') },
  ],
  Bottomwear: [
    { id: '3', name: 'Black Skirt', image: require('../../assets/dummy/bottom1.jpg') },
    { id: '4', name: 'Blue Jeans', image: require('../../assets/dummy/bottom2.jpg') },
  ],
  Dresses: [],
};

const categories = Object.keys(initialDummyData);

const WardrobeScreen = () => {
  const [dummyData, setDummyData] = useState<ClothingData>(initialDummyData);
  const [selectedCategory, setSelectedCategory] = useState('Topwear');
  const [modalVisible, setModalVisible] = useState(false);
  const [newClothing, setNewClothing] = useState<{
    name: string;
    type: string;
    color: string;
    occasion: string;
    image: { uri: string } | null;
  }>({
    name: '',
    type: '',
    color: '',
    occasion: '',
    image: null,
  });

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setNewClothing({ ...newClothing, image: { uri: result.assets[0].uri } });
    }
  };

  const handleSave = () => {
    if (!newClothing.name || !newClothing.image) return;

    const newItem: ClothingItem = {
      id: Date.now().toString(),
      name: newClothing.name,
      image: newClothing.image,
    };

    const updatedCategory = [...(dummyData[selectedCategory] || []), newItem];

    setDummyData({
      ...dummyData,
      [selectedCategory]: updatedCategory,
    });

    setModalVisible(false);
    setNewClothing({ name: '', type: '', color: '', occasion: '', image: null });
  };

  const renderClothingItem = ({ item }: { item: ClothingItem }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Wardrobe</Text>

      <View style={styles.categoryRow}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat} onPress={() => setSelectedCategory(cat)}>
            <Text style={[styles.categoryText, selectedCategory === cat && styles.selectedCat]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={dummyData[selectedCategory]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderClothingItem}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Add New Clothing Item</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Clothing</Text>
          <TextInput
            placeholder="e.g. Blue Denim Jacket"
            style={styles.input}
            value={newClothing.name}
            onChangeText={(text) => setNewClothing({ ...newClothing, name: text })}
          />
          <TextInput
            placeholder="Type (e.g. Shirt)"
            style={styles.input}
            value={newClothing.type}
            onChangeText={(text) => setNewClothing({ ...newClothing, type: text })}
          />
          <TextInput
            placeholder="Color (e.g. Blue)"
            style={styles.input}
            value={newClothing.color}
            onChangeText={(text) => setNewClothing({ ...newClothing, color: text })}
          />
          <TextInput
            placeholder="Occasion (e.g. Casual)"
            style={styles.input}
            value={newClothing.occasion}
            onChangeText={(text) => setNewClothing({ ...newClothing, occasion: text })}
          />
          <TouchableOpacity style={styles.chooseButton} onPress={openImagePicker}>
            <Text style={styles.addButtonText}>Choose Image</Text>
          </TouchableOpacity>
          {newClothing.image && (
            <Image source={{ uri: newClothing.image.uri }} style={styles.preview} />
          )}
          <TouchableOpacity style={styles.addButton} onPress={handleSave}>
            <Text style={styles.addButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: '#F3E8FF' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, color: '#4B0082' },
  categoryRow: { flexDirection: 'row', marginBottom: 12, gap: 12 },
  categoryText: { fontSize: 16, color: '#555' },
  selectedCat: { color: '#9B6EF3', fontWeight: 'bold' },
  itemCard: { flex: 1, margin: 10, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 8, resizeMode: 'cover' },
  label: { marginTop: 6, fontSize: 14 },
  addButton: {
    marginTop: 20,
    backgroundColor: '#9B6EF3',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  list: { paddingBottom: 20 },
  modalContent: { flex: 1, padding: 20, backgroundColor: '#fff' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  chooseButton: {
    backgroundColor: '#e0d4fc',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  preview: { width: 100, height: 100, alignSelf: 'center', borderRadius: 8, marginBottom: 20 },
});

export default WardrobeScreen;
