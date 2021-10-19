import React, { useContext, useState } from "react";
import { Button } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { AppContext } from "../context/AppContext";

export const Quantities = () => {
    const { cartItem,showQuantity,setShowQuantity } = useContext(AppContext);

    const handleQuantity = () => {
        setShowQuantity(showQuantity +1)
    };
            

    return (
        <View>
            <Text>{showQuantity}</Text>
            <Button title="+" onPress={handleQuantity}/>
            <Button title="-" />
            
        </View>
        
    );
};
