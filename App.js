import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import  {Bill}  from './components/Bill';
import { Cart } from './components/Cart';
import { ShowCart } from './components/ShowCart';
import { ShowBill } from './components/ShowBill';
import { AppProvider } from './context/AppContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from './components/Tabs';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AppProvider>
      <Tabs/>
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
