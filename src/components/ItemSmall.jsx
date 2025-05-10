import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const ItemSmall = ({ item, toggleBookmark, bookmarked, onDelete, onEdit }) => {
  return (
    <Animatable.View animation="fadeInUp" duration={500} style={styles.card}>
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleBookmark && toggleBookmark(item)}>
              <Ionicons
                name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color={bookmarked ? '#4A90E2' : '#fff'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.readMore}>Baca Selengkapnya</Text>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Text style={styles.delete}>Hapus</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onEdit(item)}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    marginRight: 10,
  },
  description: {
    fontSize: 12,
    color: '#aaa',
  },
  readMore: {
    fontSize: 12,
    color: '#4A90E2',
    marginTop: 5,
  },
  delete: {
    fontSize: 12,
    color: '#f00',
    marginTop: 5,
  },
  edit: {
    fontSize: 12,
    color: '#4A90E2',
    marginTop: 5,
  },
});

export default ItemSmall;
