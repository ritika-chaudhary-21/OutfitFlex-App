// app/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

const categories = ['Tops', 'Bottoms', 'Dresses', 'Jackets', 'Accessories'];

const recentOutfits = [
  {
    id: '1',
    name: 'Summer Casual',
    items: [
      { id: '101', image: require('../../assets/dummy/top1.jpg') },
      { id: '102', image: require('../../assets/dummy/bottom1.jpg') }
    ]
  },
  {
    id: '2',
    name: 'Office Look',
    items: [
      { id: '201', image: require('../../assets/dummy/top2.jpeg') },
      { id: '202', image: require('../../assets/dummy/bottom2.jpg') }
    ]
  }
];

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>OutfitFlex</Text>
        <TouchableOpacity style={styles.addItemBtn}>
          <Text style={styles.addItemText}>+ Add Item</Text>
        </TouchableOpacity>
      </View>

      {/* CTA Gradient Card */}
      <View style={styles.gradientCard}>
        <Text style={styles.gradientTitle}>Create Your Next Look</Text>
        <Text style={styles.gradientText}>Mix and match items from your wardrobe</Text>
        <TouchableOpacity style={styles.createBtn}>
          <Text style={styles.createBtnText}>Create Outfit</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((cat) => (
          <View key={cat} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{cat}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Recent Outfits */}
      <Text style={styles.sectionTitle}>Recent Outfits</Text>
      <View style={styles.outfitGrid}>
        {recentOutfits.map((outfit) => (
          <View key={outfit.id} style={styles.outfitCard}>
            <Text style={styles.outfitName}>{outfit.name}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {outfit.items.map((item) => (
                <Image key={item.id} source={item.image} style={styles.outfitImage} />
              ))}
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    padding: 16,
    alignItems: 'center'
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#44317f' },
  addItemBtn: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  addItemText: { fontSize: 14, fontWeight: '600', color: '#333' },
  gradientCard: {
    backgroundColor: '#e5d4ff',
    margin: 16,
    borderRadius: 12,
    padding: 20
  },
  gradientTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#44317f' },
  gradientText: { fontSize: 14, color: '#44317f', marginBottom: 10 },
  createBtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },
  createBtnText: { color: '#44317f', fontWeight: '600' },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 8,
    color: '#44317f'
  },
  categoryScroll: { paddingLeft: 16 },
  categoryChip: {
    backgroundColor: '#f3f0ff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10
  },
  categoryText: { color: '#44317f', fontWeight: '500' },
  outfitGrid: { padding: 16 },
  outfitCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16
  },
  outfitName: { fontWeight: '600', marginBottom: 8, color: '#333' },
  outfitImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  }
});

export default HomeScreen;
