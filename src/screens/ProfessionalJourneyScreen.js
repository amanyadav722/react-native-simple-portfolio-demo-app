import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ProfessionalJourneyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Parcours Professionnel</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Diploma</Text>
        <Text style={styles.cardContent}>Diploma in Science, Mathematics, Computer Scienec, Eglish, etc.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bachelor's</Text>
        <Text style={styles.cardContent}>Undergraduate in Computer Science.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Masters</Text>
        <Text style={styles.cardContent}>Graduation in Computer Science.</Text>
      </View>

      <Text style={styles.title}>Experience Professionnel</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Data and traffic Manager</Text>
        <Text style={styles.cardContent}>Stage as data and traffic manager for about 6 months.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Developer Full-Stack</Text>
        <Text style={styles.cardContent}>Internship as developer full-stack for about six months.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Developer Full-Stack</Text>
        <Text style={styles.cardContent}>Alternanace as developer full-stack for about 2 years.</Text>
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

export default ProfessionalJourneyScreen;
