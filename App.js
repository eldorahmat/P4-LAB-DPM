import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import CharacterSelection from './components/CharacterSelection';
import Scoreboard from './components/ScoreBoard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="CharacterSelection" 
        screenOptions={{ headerShown: false }} // Menyembunyikan header
      >
        <Stack.Screen name="CharacterSelection" component={CharacterSelection} />
        <Stack.Screen name="Scoreboard" component={Scoreboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  }
});
