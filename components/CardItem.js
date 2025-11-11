import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function CardItem({ title, description, image }) {
  const showInfo = () => {
    Alert.alert(title, description, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={showInfo}>
          <Text style={styles.buttonText}>Voir les infos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    marginHorizontal: 16,
  },
  cover: { 
    width: '100%', 
    height: 150 
  },
  body: { 
    padding: 16 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 12,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});