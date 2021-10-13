import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import  {Bill}  from './components/Bill';
import { Cart } from './components/Cart';
import { ShowCart } from './components/ShowCart';
import { ShowBill } from './components/ShowBill';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen
            name="Home page"
            component={Home}
            options={{ title: 'University Sales' }}
          />
           <Stack.Screen
           style={styles.container}
            name="Cart page"
            component={ShowCart}
            options={{ title: 'Cart '}}
          />
           <Stack.Screen
            name="Bill page"
            component={ShowBill}
            options={{ title: 'Bill ' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
