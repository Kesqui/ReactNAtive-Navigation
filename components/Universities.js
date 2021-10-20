import React, { useContext, useEffect, useState } from 'react'
import { Button, SafeAreaView,FlatList, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { AppContext } from '../context/AppContext'

export const Universities = () => {
    const { uInfo, cartItem, setCartItem,showQuantity} = useContext(AppContext)


    const setCart = ({ item }) => () => {
        const cartFinal = cartItem.filter(itemLocal => itemLocal.id !== item.id);
        cartFinal.push({...item,showQuantity})
        setCartItem(cartFinal)
        
        
        // setCartItem(cartFinal)
    }
    return (
        /*Esto es un comentario en CSS*/
        <View style={styles.centeredView}>
            
            <FlatList
                data={uInfo}
                renderItem={iterItem => (
                    
                    <View>
                        
                        <Text>Name: {iterItem.item.uName}</Text>
                        <Text>Web Page: {iterItem.item.wp}</Text>
                        <Text>Price: {iterItem.item.priceXsemester}</Text>
                        <Text>Stock: {iterItem.item.Stock}</Text>
                        <Button onPress={setCart(iterItem)} title='Add' />

                    </View>
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
});
