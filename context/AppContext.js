import 'react-native-get-random-values';
import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const AppContext=createContext();


export const AppProvider = ({children,navigate}) => {

    const [uInfo, setUinfo] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [orders, setOrders] = useState([])
    const[showBillItem,setshowBillItem]=useState([])


    async function handleFetch(){
        try {

            const response = await fetch('http://universities.hipolabs.com/search?country=United+States')
            const data =  await response.json()
    
    
            data.splice(10)
    
            const transformData = data.map((item) => {
                return {
                id: uuidv4(),
                uName: item.name,
                wp:item.web_pages[0],
                priceXsemester:Math.ceil(Math.random()*10000000),
                Stock:Math.ceil(Math.random()*100)
                }
            })
            setUinfo(transformData)  
            
        } catch (error) {
            console.log('error', error)
        }
        
}

const quantyHandle=(item)=>{
    const findValue = uInfo.find(itemTemp => itemTemp.id === item.id)
    findValue.Stock -= item.quantity;
    return findValue
}

const createOrder = () => {
    let values = uInfo
    const newOrder = cartItem.map(itemTemp => {
        const newObjectInfo =  quantyHandle(itemTemp);

        const filterValue = values.filter(itemFilter => itemTemp.id !== itemFilter.id)
        values = [...filterValue, newObjectInfo ] 
        return itemTemp
    })
    setOrders((prev) => ([...prev, newOrder]))
    setCartItem([])
}
    useEffect(() => {
        handleFetch()
    }, [])


    return (
        <AppContext.Provider value={{uInfo,cartItem,setCartItem,showBillItem,setshowBillItem,createOrder}}>
            {children}
        </AppContext.Provider>
    )
}
