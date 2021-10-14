import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationContainerRefContext } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import { Bill } from './components/Bill';
import { Cart } from './components/Cart';
import { ShowCart } from './components/ShowCart';
import { ShowBill } from './components/ShowBill';
import { AppProvider } from './context/AppContext';
import { Tabs } from './components/Tabs';



export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </AppProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
