import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fees = 10;
    const [ShowFilter, setShowFilter] = useState(false);

    const value = {
    products , currency , delivery_fees, ShowFilter, setShowFilter
    }

    return (

        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;