import React, { useContext } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { AppContext } from '../context/AppContext'

export const Universities = () => {
    const { uInfo, cartItem, setCartItem } = useContext(AppContext)


    const setCart = ({ item }) => () => {
        const cartFinal = cartItem.filter(itemLocal => itemLocal.id !== item.id);
        cartFinal.push(item)
        setCartItem(cartFinal)
    }

    return (
        /* Esto es un comentario en CSS*/
        <View>
            
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
