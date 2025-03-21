import React, { useState } from 'react';
import { 
  StyleSheet, Text, TouchableOpacity, View, Image, 
  ScrollView, TextInput, Modal 
} from 'react-native';

const categories = ['Semua', 'PC Build', 'Gaming', 'Laptop', 'AI'];

export default function MultiTechApp() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredArticles = articles.filter(
    (article) =>
      (selectedCategory === 'Semua' || article.category === selectedCategory) &&
      article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>MultiTech</Text>

      {/* Search Bar & Category Button */}
      <View style={styles.topBar}>
        <TextInput
          style={styles.searchBar}
          placeholder="Cari Artikel"
          placeholderTextColor="#AAA"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.categoryText}>Kategori</Text>
        </TouchableOpacity>
      </View>

      {/* Modal untuk Kategori */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Pilih Kategori</Text>
            <View style={styles.categoryContainer}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryBox,
                    selectedCategory === category && styles.selectedCategory,
                  ]}
                  onPress={() => {
                    setSelectedCategory(category);
                    setModalVisible(false);
                  }}
                >
                  <Text 
                    style={[
                      styles.categoryTextStyle,
                      selectedCategory === category && styles.selectedText,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Artikel dalam List (Bisa Scroll) */}
      <ScrollView style={styles.articleList}>
        {filteredArticles.map((item, index) => (
          <View key={index} style={styles.article}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDescription}>{item.description}</Text>
              <TouchableOpacity onPress={() => console.log(`${item.title} Button Pressed!`)}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const articles = [
  { 
    title: 'Build PC Budget Terbaik', 
    image: 'https://plus.unsplash.com/premium_photo-1682141878168-5dace8e1785d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'PC Build',
    description: 'Panduan lengkap untuk membangun PC terbaik dengan budget terbatas.'
  },
  { 
    title: 'Keyboard Gaming Terbaik', 
    image: 'https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'Gaming',
    description: 'Rekomendasi keyboard gaming terbaik dengan fitur unggulan untuk pengalaman bermain optimal.'
  },
  { 
    title: 'Laptop Kerja Terbaik', 
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'Laptop',
    description: 'Daftar laptop terbaik untuk menunjang produktivitas kerja Anda.'
  },
  { 
    title: 'AI pada Graphic Processing Unit', 
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    category: 'AI',
    description: 'Bagaimana kecerdasan buatan mengubah dunia GPU dan komputasi grafis.'
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A', 
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00AEEF',
    textAlign: 'center',
    marginBottom: 15,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#FFF',
  },
  categoryText: {
    color: '#00AEEF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  articleList: {
    flex: 1,
  },
  article: {
    backgroundColor: '#121212',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  articleContent: {
    marginTop: 10,
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  articleDescription: {
    fontSize: 16,
    color: '#BBB',
    marginVertical: 5,
  },
  readMoreText: {
    color: '#00AEEF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    width: 250,
  },
  modalTitle: {
    fontSize: 18,
    color: '#00AEEF',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
  },
  categoryContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  categoryBox: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  selectedCategory: {
    backgroundColor: '#00AEEF',
  },
  categoryTextStyle: {
    fontSize: 16,
    color: '#FFF',
  },
  selectedText: {
    fontWeight: 'bold',
  },
  closeButtonText: {
    color: '#FF4444',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
