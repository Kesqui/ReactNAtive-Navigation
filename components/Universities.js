import React, { useContext, useState } from 'react'
import { Button, SafeAreaView,FlatList, Text, View } from 'react-native'
import { StyleSheet } from 'react-native-web'
import { AppContext } from '../context/AppContext'

export const Universities = () => {
    const { uInfo, cartItem, setCartItem,quantity,setQuantity} = useContext(AppContext)

    const setCart = ({ item }) => () => {
        const cartFinal = cartItem.filter(itemLocal => itemLocal.id !== item.id);
        cartFinal.push(item)
        setCartItem([...cartFinal,quantity])
        // setCartItem(cartFinal)
    }
    console.log(cartItem)
    return (
        /*Esto es un comentario en CSS*/
        <SafeAreaView style={styles.centeredView}>
            
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
        </SafeAreaView>
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
