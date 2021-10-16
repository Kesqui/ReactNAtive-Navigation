import React, { useContext, useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppContext } from '../context/AppContext'

export const Cart = () => {
    const { cartItem,quantity } = useContext(AppContext)
    return (
        <View>
            <FlatList
                data={cartItem}
                renderItem={(mapCart) => (
                    
                    <View>
                        {console.log(mapCart)}
                        <Text>{`${mapCart.item.uName}   $${mapCart.item.priceXsemester}`}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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


