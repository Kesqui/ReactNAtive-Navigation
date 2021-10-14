import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import {Home} from './Home';
import { ShowBill } from './ShowBill';
import { ShowCart } from './ShowCart';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
const Tab = createBottomTabNavigator();

export const Tabs=() =>{

  return (
      <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0
            }
        }}
      >
          <Tab.Screen
            name="Home page"
            component={Home}
            options={{ title: 'University Sales' }}
          />
           <Tab.Screen
            name="Cart page"
            component={ShowCart}
            options={{ title: 'Cart '}}
          />
            <Tab.Screen
            name="Cart bill"
            component={ShowBill}
            options={{ title: 'Cart '}}
          />
      </Tab.Navigator>

  );
}