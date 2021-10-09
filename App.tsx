import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from "react-redux";
import AppProvider from './src/contexts/AppContext';

import store from './src/store/store';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <StatusBar style="auto" />
        <Navigation />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
