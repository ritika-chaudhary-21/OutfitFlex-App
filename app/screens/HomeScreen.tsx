// app/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const wardrobeCategories = [
  { name: 'Topwear', icon: require('../../assets/icons/top.png') },
  { name: 'Bottomwear', icon: require('../../assets/icons/bottom.png') },
  { name: 'Dresses', icon: require('../../assets/icons/dress.png') },
  { name: 'Footwear', icon: require('../../assets/icons/shoe.png') },
];

const recommendations = [
  { top: require('../../assets/dummy/top1.jpg'), bottom: require('../../assets/dummy/bottom1.jpg') },
  { top: require('../../assets/dummy/top2.jpeg'), bottom: require('../../assets/dummy/bottom2.jpg') },
];

const inspirations = [
  require('../../assets/outfits/1.jpg'),
  require('../../assets/outfits/2.jpg'),
  require('../../assets/outfits/3.jpg'),
];

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>👤 Home</Text>

      <Text style={styles.sectionTitle}>Your Wardrobe</Text>
      <View style={styles.wardrobeRow}>
        {wardrobeCategories.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.iconButton}
            onPress={() => navigation.navigate('Wardrobe', { category: item.name })}
          >
            <Image source={item.icon} style={styles.iconImage} />
            <Text style={styles.iconText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => navigation.navigate('Wardrobe')}>
          <Text style={styles.viewAll}>View All →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Today’s Outfit Recommendation</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendationRow}>
        {recommendations.map((combo, index) => (
          <View key={index} style={styles.outfitCard}>
            <Image source={combo.top} style={styles.outfitImage} />
            <Image source={combo.bottom} style={styles.outfitImage} />
            <View style={styles.outfitButtons}>
              <TouchableOpacity><Ionicons name="checkmark-circle" size={28} color="green" /></TouchableOpacity>
              <TouchableOpacity><Ionicons name="close-circle" size={28} color="red" /></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Style Inspirations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.inspoRow}>
        {inspirations.map((img, index) => (
          <Image key={index} source={img} style={styles.inspoImage} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F3E8FF',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B0082',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 12,
  },
  wardrobeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 12,
  },
  iconText: {
    marginTop: 4,
    fontSize: 12,
  },
  iconImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  viewAll: {
    color: '#6C63FF',
    marginTop: 12,
  },
  recommendationRow: {
    marginVertical: 12,
  },
  outfitCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    alignItems: 'center',
    width: 140,
  },
  outfitImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  outfitButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inspoRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  inspoImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
});

export default HomeScreen;
