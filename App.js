import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfessionalJourneyScreen from './src/screens/ProfessionalJourneyScreen';
import PersonalJourneyScreen from './src/screens/PersonalJourneyScreen';
import PersonalDescriptionScreen from './src/screens/PersonalDescriptionScreen';
import VisualPortfolioScreen from './src/screens/VisualPortfolioScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfessionalJourney" component={ProfessionalJourneyScreen} />
        <Stack.Screen name="PersonalJourney" component={PersonalJourneyScreen} />
        <Stack.Screen name="PersonalDescription" component={PersonalDescriptionScreen} />
        <Stack.Screen name="VisualPortfolio" component={VisualPortfolioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Portfolio from './src/portfolio/Portfolio';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <Portfolio />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
