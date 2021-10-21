import 'react-native-get-random-values';
import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const AppContext=createContext();


export const AppProvider = ({children,navigate}) => {

    const [uInfo, setUinfo] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [cartItemFinal, setCartItemFinal] = useState()
    const [orders, setOrders] = useState([])
    const [showBillItem,setshowBillItem]=useState([])    

    const [finishShow,setFinishShow]=useState([])
    const [changeInitial,setChangeInitial]= useState(cartItem)
    const [toShow,setToShow]= useState(uInfo)


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
    findValue.Stock -= item.showQuantity;
    setChangeInitial((prev)=>([
        ...prev, 
        item.Stock=findValue.Stock
    ]))

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
        <AppContext.Provider value={{
             createOrder,
            uInfo,
            cartItem,
            setCartItem,
            setUinfo,
            showBillItem,
            finishShow,
            setChangeInitial,
            changeInitial,
            setFinishShow,
            setshowBillItem,
            setToShow,
            toShow,
            cartItemFinal,
            setCartItemFinal,
            orders,
            setOrders,
            }}>
            {children}
        </AppContext.Provider>
    )
}
