// app/screens/WardrobeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const dummyClothes = [
  { id: '1', name: 'White Top', image: require('../../assets/dummy/top1.jpg') },
  { id: '2', name: 'Beige Sweater', image: require('../../assets/dummy/top2.jpeg') },
  { id: '3', name: 'Black Skirt', image: require('../../assets/dummy/bottom1.jpg') },
  { id: '4', name: 'Wide Leg Jeans', image: require('../../assets/dummy/bottom2.jpg') },
];

const WardrobeScreen = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.label}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Wardrobe</Text>
      <FlatList
        data={dummyClothes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Clothing Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F3E8FF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4B0082',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#9B6EF3',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WardrobeScreen;
