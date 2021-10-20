import React, { useContext, useState } from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { AppContext } from "../context/AppContext";

export const Quantities = () => {
    const { cartItem,showQuantity,setShowQuantity,changeInitial,setChangeInitial } = useContext(AppContext);
    const mapID=cartItem.map(IdMap=>IdMap.id)
    console.log(mapID[0])
    const handleQuantityAdd = (item) =>()=> {
        const independentlyQuant = cartItem.map(mapItem => 
            mapItem.id != item.id ? setShowQuantity(showQuantity +1): 1);
        
        setChangeInitial((prev)=>([
            ...prev,
            item[0].showQuantity=showQuantity+1
        ]))



        
    };

            

    return (
        <View>
            <Text>{showQuantity}</Text>
            <Button title="+" onPress={handleQuantityAdd(cartItem)}/>
            <Button title="-" />
            
        </View>
        
    );
};
