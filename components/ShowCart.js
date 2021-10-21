import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { AppContext, AppProvider } from '../context/AppContext';
import { Cart } from './Cart';
import { Navbar } from './Navbar';

export const ShowCart = () => {
    

    const {cartItem,createOrder,setshowBillItem,setUinfo,setToShow,setChangeInitial ,finishShow,setFinishShow,uInfo,setOrders,setCartItem}=useContext(AppContext)
   

    const handleBill=()=>{
       // const billNewArray=cartItem.filter(itemBill=>itemBill.id!==item.id);
       // billNewArray.push(item)
        setshowBillItem(cartItem)
        createOrder()
        ///handleItemToShow(cartItem)

    }
    const handleItemToShow=(item)=>{
            const results = uInfo.map(mapItem => 
                mapItem.id == item.id ? [...mapItem, mapItem.Stock= item.Stock]: mapItem);
                setUinfo(results)
            
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
