import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { AppProvider } from '../context/AppContext';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { Universities } from './Universities';

export const Home=()=> {
    return (
                <SafeAreaView style={{ flex: 1 ,width:200}} >
                        <Text>Universities Options in US</Text>
                        <Universities />
                </SafeAreaView>

        
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
