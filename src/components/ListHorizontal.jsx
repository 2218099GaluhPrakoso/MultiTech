import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";

const ListHorizontal = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <Animatable.View animation="slideInLeft" duration={400} style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.category,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text
              style={
                selectedCategory === category ? styles.activeText : styles.text
              }
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    justifyContent: "center",
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: "#333",
    borderRadius: 15,
    marginRight: 6,
    justifyContent: "center",
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
