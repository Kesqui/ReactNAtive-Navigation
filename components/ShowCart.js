import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppContext, AppProvider } from '../context/AppContext';
import { Cart } from './Cart';
import { Navbar } from './Navbar';

export const ShowCart = () => {
    
    
    const {cartItem,setshowBillItem,showQuantity,uInfo,setOrders,setCartItem}=useContext(AppContext)
   
    const [caritemQuantity,setCaritemQuantity]=useState(cartItem)

    const handleBill=(item)=>{
        const billNewArray=cartItem.filter(itemBill=>itemBill.id!==item.id);
        billNewArray.push(item)
        setshowBillItem(cartItem)
        createOrder()

    }

    
    const quantyHandle=(item)=>{
        const findValue = uInfo.find(itemTemp => itemTemp.id === item.id)
        findValue.Stock -= showQuantity;
       
    }
    const createOrder = () => {
        let values = uInfo
        const newOrder = cartItem.map(itemTemp => {
            const newObjectInfo =  quantyHandle(itemTemp);
    
            const filterValue = values.filter(itemFilter => itemTemp.id !== itemFilter.id)
            values = [...filterValue, newObjectInfo ] 
            return itemTemp
        })
        setOrders((prev) => ([...prev, newOrder]))
        setCartItem([])
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
