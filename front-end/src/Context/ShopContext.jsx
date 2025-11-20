import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fees = 10;
    const [ShowFilter, setShowFilter] = useState(false);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cardItems, setCardItems] = useState({});

                        //  cartData
    const addToCart = async (itemId,size) => {

        //   if (!size) {
        //     toast.error("Please select a size");
        //     return;
        //   }

        let cartData = structuredClone(cardItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        console.log('addToCart -> new cartData:', cartData);
        setCardItems(cartData);
    }

                                 // add count function to cart

   const getCartCount = () => {
        let totalCount = 0;
       for (const itemId in cardItems) {
           for (const size in cardItems[itemId]) {
            try {
                const qty = Number(cardItems[itemId][size]) || 0;
                if (qty > 0) {
                    totalCount += qty;
                }

            } catch (error) {
                // ignore malformed entries
            }
              }
               }
               return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cardItems);

        cartData[itemId][size] = quantity;

        setCardItems(cartData);
    }


    const value = {
    products , currency , delivery_fees, ShowFilter, setShowFilter
    , search, setSearch, showSearch, setShowSearch, cardItems, setCardItems, addToCart, getCartCount
    , updateQuantity
    }

    return (

        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;