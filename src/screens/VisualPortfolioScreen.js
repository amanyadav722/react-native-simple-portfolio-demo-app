import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const VisualPortfolioScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const portfolioItems = [
    { id: '1', title: 'Line tracking robot 2016', imageUrl: require('../assets/p1.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '2', title: 'Solar Panel claning robot 2016', imageUrl: require('../assets/p2.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '3', title: 'Smartcity project 2017', imageUrl: require('../assets/p1.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '4', title: 'Smart Traffic Light 2018', imageUrl: require('../assets/p2.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '5', title: 'Games development 2019', imageUrl: require('../assets/p1.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '6', title: 'Coding Hackathons 2020-2022', imageUrl: require('../assets/p2.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '7', title: 'Personal Projects', imageUrl: require('../assets/p1.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
    { id: '8', title: 'Project 2', imageUrl: require('../assets/p2.png'), description: 'This is just for fun description test and there is nothing serious about that so just chill.' },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mon Portfolio Visuel</Text>
      {portfolioItems.map(item => (
        <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
          <View style={styles.itemContainer}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Modal to display the selected item */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem && (
              <>
                <Image source={selectedItem.imageUrl} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                <Text style={styles.modalDescription}>{selectedItem.description}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
    //  <ScrollView style={styles.container}>
    //     <Text style={styles.header}>Mon Portfolio Visuel</Text>
    //     {portfolioItems.map(item => (
    //       <View key={item.id} style={styles.itemContainer}>
    //         <Image source={item.imageUrl} style={styles.image} />
    //         <Text style={styles.itemTitle}>{item.title}</Text>
    //       </View>
    //     ))}
    //   </ScrollView>
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
  itemDescription: {
    fontSize: 16,
    color: '#444',
    padding: 10,
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
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalDescription: {
    fontSize: 20,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

export default VisualPortfolioScreen;
