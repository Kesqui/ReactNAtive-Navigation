import React, { useContext, useState } from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { AppContext } from "../context/AppContext";

export const Quantities = () => {
    const { cartItem,showQuantity,setShowQuantity,changeInitial,setChangeInitial } = useContext(AppContext);
    
    const handleQuantity = (item) =>()=> {
      
        setShowQuantity(showQuantity +1)
        setChangeInitial((prev)=>([
            ...prev,
            item[0].showQuantity=showQuantity+1
        ]))
    };

            

    return (
        <View>
            <Text>{showQuantity}</Text>
            <Button title="+" onPress={handleQuantity(cartItem)}/>
            <Button title="-" />
            
        </View>
        
    );
};
