import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle = 'dark-content' backgroundColor={'white'} />
        <Header title="Guess a Number"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
