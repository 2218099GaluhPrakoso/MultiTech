import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { displayNotification } from "../../utils/notification";

const FormScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    if (title && category && description && image) {
      try {
        await addDoc(collection(db, "articles"), {
          title,
          category,
          description,
          image,
          createdAt: Timestamp.now(),
        });
        await displayNotification("Artikel Ditambahkan", `"${title}" berhasil disimpan.`);
        Alert.alert("Berhasil", "Artikel berhasil ditambahkan.");
        navigation.goBack();
      } catch (error) {
        Alert.alert("Gagal", "Gagal menambahkan artikel.");
        console.log("Error adding document: ", error);
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
