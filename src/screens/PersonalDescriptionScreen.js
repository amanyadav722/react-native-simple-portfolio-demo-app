import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PersonalDescriptionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Description Personnelle</Text>
      <Text style={styles.description}>
        Highly motivated and dedicated student with a strong academic record and a passion for learning. Proven ability to succeed in challenging academic environments, consistently achieving top grades and demonstrating a deep understanding of complex subjects. Eager to apply knowledge and skills to real-world situations and contribute to a team environment.{"\n"}{"\n"}

        Additionally, you can include specific skills and accomplishments that are relevant to the position you are applying for. For example, if you are applying for a job in marketing, you could mention your experience in creating social media campaigns or your knowledge of SEO.{"\n"}{"\n"}

        Here is another sample description:

        A creative and resourceful student with a passion for Computer Science. Possesses strong analytical and problem-solving skills, coupled with a knack for innovation. Eager to explore new ideas and apply theoretical knowledge to practical applications.{"\n"}{"\n"}

        Ultimately, the key to writing a compelling student CV is to highlight your strengths and accomplishments in a way that demonstrates your potential to succeed in the workplace. Be sure to tailor your CV to each specific job application, highlighting the skills and experiences that are most relevant to the position.</Text>
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
  description: {
    fontSize: 18,
    color: '#34495e',
    margin: 10,
  },
});

export default PersonalDescriptionScreen;
