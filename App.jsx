import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { articles, categories } from "./src/data";
import ItemSmall from "./src/components/ItemSmall";
import ListHorizontal from "./src/components/ListHorizontal";
import YourBookmark from "./src/screens/bookmark";
import ProfileData from "./src/screens/profile";
import FormScreen from "./src/screens/form/FormScreen";
import EditFormScreen from "./src/screens/form/EditFormScreen";

const Stack = createNativeStackNavigator();

const MainScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [screen, setScreen] = useState("Home");
  const [bookmarked, setBookmarked] = useState([]);

  const fadeRef = useRef(null);

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

  const renderHome = () => (
    <Animatable.View
      ref={fadeRef}
      animation="fadeInUp"
      duration={500}
      style={{ flex: 1 }}
    >
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
      <TouchableOpacity
        onPress={() => navigation.navigate("Form")}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+ Tambah Artikel</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemSmall
            item={item}
            bookmarked={bookmarked}
            toggleBookmark={toggleBookmark}
            onEdit={(article) => navigation.navigate("EditForm", { article })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Animatable.View>
  );

  const handleChangeScreen = (target) => {
    fadeRef.current?.fadeOut(200).then(() => {
      setScreen(target);
      fadeRef.current?.fadeIn(300);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MultiTech</Text>

      {screen === "Home" && renderHome()}
      {screen === "Bookmark" && (
        <Animatable.View
          ref={fadeRef}
          animation="fadeInUp"
          duration={500}
          style={{ flex: 1 }}
        >
          <YourBookmark bookmarked={bookmarked} toggleBookmark={toggleBookmark} />
        </Animatable.View>
      )}
      {screen === "Profile" && (
        <Animatable.View
          ref={fadeRef}
          animation="fadeInUp"
          duration={500}
          style={{ flex: 1 }}
        >
          <ProfileData />
        </Animatable.View>
      )}

      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => handleChangeScreen("Home")}>
          <Text style={[styles.menuText, screen === "Home" && styles.active]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeScreen("Bookmark")}>
          <Text style={[styles.menuText, screen === "Bookmark" && styles.active]}>
            Bookmark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeScreen("Profile")}>
          <Text style={[styles.menuText, screen === "Profile" && styles.active]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: "Tambah Artikel" }}
        />
        <Stack.Screen
          name="EditForm"
          component={EditFormScreen}
          options={{ title: "Edit Artikel" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileData}
          options={{ title: "Profil Pengguna" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: "#222",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 10,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#111",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  menuText: {
    color: "#aaa",
    fontSize: 14,
  },
  active: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
