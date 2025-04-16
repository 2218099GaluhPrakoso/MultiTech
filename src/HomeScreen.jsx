// src/HomeScreen.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { articles, categories } from "./data";
import ItemSmall from "./components/ItemSmall";
import ListHorizontal from "./components/ListHorizontal";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [bookmarked, setBookmarked] = useState([]);

  const toggleBookmark = (item) => {
    if (bookmarked.find((x) => x.id === item.id)) {
      setBookmarked(bookmarked.filter((x) => x.id !== item.id));
    } else {
      setBookmarked([...bookmarked, item]);
    }
  };

  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cari Artikel"
        style={styles.searchBar}
        placeholderTextColor="#888"
      />
      <ListHorizontal
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemSmall
            item={item}
            bookmarked={bookmarked}
            toggleBookmark={toggleBookmark}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  searchBar: {
    backgroundColor: "#222",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 10,
  },
});

export default HomeScreen;
