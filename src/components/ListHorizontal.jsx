import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const ListHorizontal = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.category,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text style={selectedCategory === category ? styles.activeText : styles.text}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40, // Pastikan kategori tidak memanjang ke bawah
    justifyContent: "center",
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center", // Menjaga item tetap di tengah secara vertikal
  },
  category: {
    height: 30, // Atur tinggi kategori agar tidak memanjang ke bawah
    paddingHorizontal: 10,
    backgroundColor: "#333",
    borderRadius: 15,
    marginRight: 6,
    justifyContent: "center", // Menjaga teks tetap di tengah
  },
  activeCategory: {
    backgroundColor: "#4A90E2",
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ListHorizontal;
