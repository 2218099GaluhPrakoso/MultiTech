import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

const FormScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    if (title && category && description && image) {
      try {
        await axios.post("https://681dff34c1c291fa6632938e.mockapi.io/api/articles", {
          title,
          category,
          description,
          image, 
        });
        Alert.alert("Berhasil", "Artikel berhasil ditambahkan.");
        navigation.goBack();
      } catch (error) {
        Alert.alert("Gagal", "Gagal menambahkan artikel.");
      }
    } else {
      Alert.alert("Gagal", "Mohon lengkapi semua field.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambah Artikel Baru</Text>
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
      <Button title="Tambah" onPress={handleSubmit} color="#4A90E2" />
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
});

export default FormScreen;
