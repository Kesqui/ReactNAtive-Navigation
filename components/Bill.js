import React, { useContext, useEffect, useState } from 'react'
import { Modal, Pressable, Text } from 'react-native'
import { Button, FlatList, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native-web'
import { AppContext, AppProvider } from '../context/AppContext'

export const Bill = () => {
    
    const {showBillItem,setshowBillItem} = useContext(AppContext)
    
    const [sum,setSum]=useState(0)

    const sumFunction =()=>{
        const pricesArray=showBillItem.map(item=>item.priceXsemester)
        const quantityArray=showBillItem.map(itemq=>itemq.showQuantity)
       //setSum(pricesArray.reduce((a, b) => a + b, 0))
       setSum(pricesArray.map((v,i)=>v*quantityArray[i]).reduce((x,y)=>x+y),0)
        }
        console.log(showBillItem)
        //const cleanScreen=()=>{
        //    setshowBillItem([])
        //    setSum(0) 
        //}
        
        useEffect(() => {
            sumFunction()    
        }, [showBillItem])
//update
    
    return (
        <View style={styles.billBox}>
                    <FlatList
                            data={showBillItem}
                            renderItem={(mapBill) => (
                                <View>
                                    <Text>{`${mapBill.item.uName}  $${mapBill.item.priceXsemester}`}</Text>
                                    
                                </View>
                            )}
                            />
                    <Text>Total amount: {sum}</Text>
                    
        </View>
    )
}

const styles=StyleSheet.create({
    billBox:{
        alignContent:'center',
        border:'1px solid black',
        justifyContent:'center',
        width:'40vw',
        flexDirection:'row',
    }

})
