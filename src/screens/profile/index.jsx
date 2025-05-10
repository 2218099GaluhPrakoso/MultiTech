// src/screens/profile/index.jsx
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import ItemSmall from "../../components/ItemSmall"; // Komponen Item kecil untuk menampilkan artikel
import axios from "axios";
import { useNavigation } from '@react-navigation/native'; // Mengimpor useNavigation

const ProfileData = () => {
  const navigation = useNavigation(); // Mendapatkan objek navigation dengan hook
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://681dff34c1c291fa6632938e.mockapi.io/api/articles");
        setArticles(response.data);
      } catch (error) {
        Alert.alert("Error", "Gagal mengambil data artikel.");
      }
    };

    fetchArticles();
  }, []);

  // Fungsi untuk menghapus artikel
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://681dff34c1c291fa6632938e.mockapi.io/api/articles/${id}`);
      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
    } catch (error) {
      Alert.alert("Error", "Gagal menghapus artikel.");
    }
  };

  // Fungsi untuk mengarahkan ke EditFormScreen dengan membawa artikel yang akan diedit
  const handleEdit = (article) => {
    navigation.navigate("EditForm", { article }); // Menggunakan navigation.navigate untuk mengarahkan ke EditFormScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.name}>M Galuh Eka Prakoso</Text>
        <Text style={styles.nim}>2218099</Text>
        <Text style={styles.email}>2218099@gmail.scholar.ac.id</Text>
      </View>

      <Text style={styles.bookmarkHeader}>Artikel yang Disimpan</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemSmall
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit}  // Mengarahkan ke EditFormScreen untuk mengedit artikel
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  nim: {
    fontSize: 16,
    color: "#4A90E2",
    marginTop: 5,
  },
  email: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  bookmarkHeader: {
    fontSize: 16,
    color: "#4A90E2",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ProfileData;
