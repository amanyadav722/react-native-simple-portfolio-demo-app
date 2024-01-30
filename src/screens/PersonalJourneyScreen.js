import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PersonalJourneyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Parcours Personnel</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Films</Text>
        <Text style={styles.cardContent}>I'm passionate about films to watch them and to make them in future.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sports</Text>
        <Text style={styles.cardContent}>Love sports and like to motivate others for doing sports.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>e-meeting</Text>
        <Text style={styles.cardContent}>Like to e-meet people and share ideas.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reading</Text>
        <Text style={styles.cardContent}>Like to read sometimes as well.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Travelling</Text>
        <Text style={styles.cardContent}>Like to travel a lot to different countries in Europe and in Asia and looking for another continents as well.</Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    padding: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});

export default PersonalJourneyScreen;
