import React, { useState } from 'react';
import { View, Text, ScrollView, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const DetailModal = ({ visible, onClose, children }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {children}
        <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const ProfessionalJourneyScreen = () => {
  const [modalVisible, setModalVisible] = useState({ diploma: false, bachelors: false, masters: false });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Parcours Professionnel</Text>

      <TouchableOpacity onPress={() => setModalVisible({ ...modalVisible, diploma: true })}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Diploma</Text>
          <Text style={styles.cardContent}>Diploma in Science, Mathematics, Computer Scienec, Eglish, etc.</Text>
        </View>
      </TouchableOpacity>
      <DetailModal
        visible={modalVisible.diploma}
        onClose={() => setModalVisible({ ...modalVisible, diploma: false })}
      >
        <Text style={styles.cardTitle}>Diploma</Text>
        <Text style={styles.cardContent}>Diploma in Science, Mathematics, Computer Scienec, Eglish, etc.{"\n"}
          A creative and resourceful student with a passion for Computer Science. Possesses strong analytical and problem-solving skills, coupled with a knack for innovation. Eager to explore new ideas and apply theoretical knowledge to practical applications.{"\n"}
        </Text>
      </DetailModal>

      <TouchableOpacity onPress={() => setModalVisible({ ...modalVisible, bachelors: true })}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Bachelor's</Text>
          <Text style={styles.cardContent}>Undergraduate in Computer Science.</Text>
        </View>
      </TouchableOpacity>
      <DetailModal
        visible={modalVisible.bachelors}
        onClose={() => setModalVisible({ ...modalVisible, bachelors: false })}
      >
        <Text style={styles.cardTitle}>Bachelor's</Text>
        <Text style={styles.cardContent}>Undergraduate in Computer Science.</Text>
        <Text style={styles.cardContent}>Diploma in Science, Mathematics, Computer Scienec, Eglish, etc.{"\n"}
          A creative and resourceful student with a passion for Computer Science. Possesses strong analytical and problem-solving skills, coupled with a knack for innovation. Eager to explore new ideas and apply theoretical knowledge to practical applications.{"\n"}
        </Text>
      </DetailModal>

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCloseButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfessionalJourneyScreen;
