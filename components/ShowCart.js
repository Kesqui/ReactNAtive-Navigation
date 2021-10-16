import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppContext, AppProvider } from '../context/AppContext';
import { Cart } from './Cart';
import { Navbar } from './Navbar';

export const ShowCart = ({ navigation }) => {
    
    
    const {cartItem,setshowBillItem,createOrder}=useContext(AppContext)
    const [quantity,setQuantity]=useState([])

    const handleBill=(item)=>{
        const billNewArray=cartItem.filter(itemBill=>itemBill.id!==item.id);
        billNewArray.push(item)
        setshowBillItem(cartItem)
        createOrder()

    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }} >

                <Cart />

            </SafeAreaView>
            <SafeAreaView>
                <Button title='Pay' onPress={handleBill} />
            </SafeAreaView>
        </>


    );
}
