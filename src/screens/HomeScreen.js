import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const profileImage = require('../assets/port.png');
const modalImage = require('../assets/port.png');

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={profileImage} style={styles.profileImage} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={modalImage} style={styles.modalImage} />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.Name}>Aman YADAV</Text>
      <Text style={styles.welcomeText}>Bienvenue Sur Mon Portfolio!{"\n"}</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Text style={styles.dropdownButtonText}>Menu</Text>
        <Ionicons name={menuVisible ? "chevron-up" : "chevron-down"} size={24} color="white" />
      </TouchableOpacity>


      {menuVisible && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProfessionalJourney')}
          >
            <Text style={styles.buttonText}>Parcours Professionnel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PersonalJourney')}
          >
            <Text style={styles.buttonText}>Parcours Personnel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PersonalDescription')}
          >
            <Text style={styles.buttonText}>Description Personnelle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('VisualPortfolio')}
          >
            <Text style={styles.buttonText}>Portfolio Visuel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  Name: {
    fontSize: 50,
  },
  welcomeText: {
    fontSize: 25,
    marginVertical: 20,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
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
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
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

  dropdownButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: 250,
    alignItems: 'center',
  },
  dropdownButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
