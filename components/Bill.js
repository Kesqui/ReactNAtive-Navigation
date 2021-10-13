import React, { useContext, useState } from 'react'
import { Modal, Pressable, Text } from 'react-native'
import { Button, FlatList, TouchableOpacity, View } from 'react-native'
import { AppContext, AppProvider } from '../context/AppContext'

export const Bill = () => {
    const [prices]=useState([])
    const { cartItem } = useContext(AppContext)
    const[billModal,setBillModal]=useState(false)
    console.log(cartItem)
    const footerBuy = () => {
        return (
            <View >
                <Text>Buy</Text>
            </View>
        );
    };
    return (
        <View>
                    <FlatList
                            data={cartItem}
                            renderItem={(mapCart) => (

                                <View>
                                    <Text>{`University Name: ${mapCart.item.uName}   Price: $${mapCart.item.priceXsemester}`}</Text>
                                </View>
                            )}
                            ListFooterComponent={footerBuy}
                        />

        </View>
    )
}
