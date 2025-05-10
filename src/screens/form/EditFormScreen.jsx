import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import axios from "axios";

const EditFormScreen = ({ route, navigation }) => {
  const { article } = route.params; // Mendapatkan data artikel dari route.params
  const [title, setTitle] = useState(article.title);
  const [category, setCategory] = useState(article.category);
  const [description, setDescription] = useState(article.description);
  const [image, setImage] = useState(article.image);

  const handleUpdate = async () => {
    if (!title || !category || !description || !image) {
      Alert.alert("Gagal", "Semua field harus diisi.");
      return;
    }

    try {
      await axios.put(`https://681dff34c1c291fa6632938e.mockapi.io/api/articles/${article.id}`, {
        title,
        category,
        description,
        image,
      });
      Alert.alert("Berhasil", "Artikel berhasil diperbarui.");
      navigation.goBack(); 
    } catch (error) {
      Alert.alert("Gagal", "Gagal memperbarui artikel.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Artikel</Text>
      <TextInput
        placeholder="Judul"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Kategori"
        placeholderTextColor="#888"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Deskripsi"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <TextInput
        placeholder="URL Gambar"
        placeholderTextColor="#888"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleUpdate} style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Perbarui Artikel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    color: "#4A90E2",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EditFormScreen;
