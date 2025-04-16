import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { articles } from "../../data";
import { ItemSmall } from "../../components";

const ProfileData = () => {
  const bookmarkedArticles = articles.filter((item) => item.isBookmarked);

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/9919?s=280&v=4" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>M Galuh Eka Prakoso</Text>
        <Text style={styles.nim}>2218099</Text>
        <Text style={styles.email}>2218099@gmail.scholar.ac.id</Text>
      </View>

      <Text style={styles.bookmarkHeader}>Artikel yang Disimpan</Text>
      <FlatList
        data={bookmarkedArticles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemSmall item={item} />}
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
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
