import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ItemSmall from "../../components/ItemSmall";
import * as Animatable from "react-native-animatable";

const YourBookmark = ({ bookmarked, toggleBookmark }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.header}>
        Your Bookmarked Articles
      </Animatable.Text>
      <FlatList
        data={bookmarked}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Animatable.View animation="fadeInUp">
            <ItemSmall
              item={item}
              toggleBookmark={toggleBookmark}
              bookmarked={bookmarked}
            />
          </Animatable.View>
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
  },
  header: {
    fontSize: 18,
    color: "#4A90E2",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default YourBookmark;
