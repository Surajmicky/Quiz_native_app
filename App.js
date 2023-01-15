import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

import { ScoreProvider } from './src/context/ScoreContext';
export default function App() {
  return (
    <ScoreProvider>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </ScoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
