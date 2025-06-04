// src/screens/profile/index.jsx
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import ItemSmall from "../../components/ItemSmall";
import { useNavigation } from "@react-navigation/native";


import { db } from "../../firebase/firebaseConfig"; 
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const ProfileData = () => {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(data);
      } catch (error) {
        Alert.alert("Error", "Gagal mengambil data artikel.");
      }
    };

    fetchArticles();
  }, []);


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "articles", id));
      setArticles((prevArticles) =>
        prevArticles.filter((article) => article.id !== id)
      );
    } catch (error) {
      Alert.alert("Error", "Gagal menghapus artikel.");
    }
  };


  const handleEdit = (article) => {
    navigation.navigate("EditForm", { article });
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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemSmall
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit}
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
