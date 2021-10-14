import 'react-native-get-random-values';
import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const AppContext=createContext();

export const AppProvider = ({children,navigate}) => {

    const [uInfo, setUinfo] = useState([])
    const [cartItem, setCartItem] = useState([])

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

    useEffect(() => {
        handleFetch()
    }, [])

    console.log(cartItem)

    return (
        <AppContext.Provider value={{uInfo,cartItem,setCartItem}}>
            {children}
        </AppContext.Provider>
    )
}
