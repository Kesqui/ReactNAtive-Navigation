import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppProvider } from '../context/AppContext';
import { Bill } from './Bill';
import { Navbar } from './Navbar';

export const ShowBill = ({navigation}) => {
    return (

        <View style={{ flex: 1 }}>
        <AppProvider>
            <SafeAreaView style={{ flex: 1 }} >
                <View>
                    <Bill />
                </View>
            </SafeAreaView>
        </AppProvider>
        <View >
                <Navbar navigation={navigation} />
            </View>
        </View>


    );
}
