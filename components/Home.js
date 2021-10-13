import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppProvider } from '../context/AppContext';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Universities } from './Universities';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }} >
            <AppProvider>
                <SafeAreaView style={{ flex: 1 }} >
                    <View style={styles.container}>
                        <Text>Universities Options in US</Text>
                        <Universities />
                    </View>
                </SafeAreaView>
            </AppProvider>
            <View >
                <Navbar navigation={navigation} />
            </View>

        </View>
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
