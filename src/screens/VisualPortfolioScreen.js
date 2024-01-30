import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const VisualPortfolioScreen = () => {
  const portfolioItems = [
    { id: '1', title: 'Line tracking robot 2016', imageUrl: require('../assets/p1.png') },
    { id: '2', title: 'Solar Panel claning robot 2016', imageUrl: require('../assets/p2.png') },
    { id: '3', title: 'Smartcity project 2017', imageUrl: require('../assets/p1.png') },
    { id: '4', title: 'Smart Traffic Light 2018', imageUrl: require('../assets/p2.png') },
    { id: '5', title: 'Games development 2019', imageUrl: require('../assets/p1.png') },
    { id: '6', title: 'Coding Hackathons 2020-2022', imageUrl: require('../assets/p2.png') },
    { id: '7', title: 'Personal Projects', imageUrl: require('../assets/p1.png') },
    { id: '8', title: 'Project 2', imageUrl: require('../assets/p2.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mon Portfolio Visuel</Text>
      {portfolioItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.imageUrl} style={styles.image} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  itemContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    padding: 10,
  },
});

export default VisualPortfolioScreen;
