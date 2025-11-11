import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CardItem from './CardItem';
import cards from '../data/cards.json';

export function CardList() {
  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardItem
          title={item.title}
          description={item.description}
          image={item.image}
        />
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 16,
  }
});