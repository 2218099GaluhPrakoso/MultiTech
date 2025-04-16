import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const FormScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title && category && description) {
      Alert.alert("Berhasil", "Artikel berhasil ditambahkan (simulasi).");
      navigation.goBack(); // kembali ke Home
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
