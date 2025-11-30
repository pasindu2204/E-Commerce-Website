import { createContext } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fees = 10;
<<<<<<< HEAD
=======
    const [ShowFilter, setShowFilter] = useState(false);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cardItems, setCardItems] = useState({});
    const navigate = useNavigate();

                        //  cartData
    const addToCart = async (itemId,size) => {


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
    
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cardItems) {
              let itemInfo = products.find(product => product._id === items); 
              for (const item in cardItems[items]) {
                try {
                    if (cardItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cardItems[items][item];
                    }
                } catch (error) {
                    // ignore malformed entries
                }
            }
        }
        return totalAmount;
    }

>>>>>>> dev

    const value = {
    products , currency , delivery_fees
    }

    return (

        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;