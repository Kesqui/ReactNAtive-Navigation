import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import {Home} from './Home';
import { ShowBill } from './ShowBill';
import { ShowCart } from './ShowCart';

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
                elevation:0,
            },
            navigationOptions:{
              tabBarIcon: ({ tintColor, focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "home" : "home-outline"}
                  color={tintColor}
                  size={28}
                />
              )
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
            options={{ title: 'Bill '}}
          />
      </Tab.Navigator>

  );
}