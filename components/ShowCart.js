import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppProvider } from '../context/AppContext';
import { Cart } from './Cart';
import { Navbar } from './Navbar';

export const ShowCart = ({ navigation }) => {
    return (
                <SafeAreaView style={{ flex: 1 }} >

                        <Cart />

                </SafeAreaView>


    );
}
