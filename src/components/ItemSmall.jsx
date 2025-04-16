import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


const ItemSmall = ({ item, toggleBookmark, bookmarked }) => {
  if (!item) return null;

  const isBookmarked = bookmarked?.some((x) => x.id === item.id);

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => toggleBookmark(item)}>
            <Ionicons
              name={isBookmarked ? "bookmark" : "bookmark-outline"}
              size={20}
              color={isBookmarked ? "#4A90E2" : "#fff"}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.readMore}>Read More</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#222",
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    marginRight: 10,
  },
  description: {
    fontSize: 12,
    color: "#aaa",
  },
  readMore: {
    fontSize: 12,
    color: "#4A90E2",
    marginTop: 5,
  },
});

export default ItemSmall;
