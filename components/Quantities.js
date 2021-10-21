import React, { useContext, useState } from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { AppContext } from "../context/AppContext";

export const Quantities = () => {
    const { cartItem,setCartItem } = useContext(AppContext);
    const [showQuantity, setShowQuantity]=useState(1)
    const mapID=cartItem.map(IdMap=>IdMap.id)

    const handleQuantityAdd = (item)=>()=>{
        
        setShowQuantity(showQuantity +1);
        const mapIndex=item.map((_some,i)=>[
        cartItem[i].showQuantity=showQuantity+1
        ])
        return mapIndex
    };
    console.log(cartItem)
    const handleQuantityLess = (index)=> ()=> {
        
        setShowQuantity(showQuantity -1);
        const newArrayLess=[...cartItem]
        newArrayLess[index].showQuantity=showQuantity-1
        
    };

            

    return (
        <View>
            <Text>{showQuantity}</Text>
            <Button title="+" onPress={handleQuantityAdd(cartItem)}/>
            <Button title="-" onPress={handleQuantityLess(cartItem)}/>
            
        </View>
        
    );
};
