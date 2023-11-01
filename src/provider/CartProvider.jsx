import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { AuthContext } from './AuthProvider';

export const CartProduct = createContext(null);

const CartProvider = ({children}) => {
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const [carts, setCarts] = useState([]);

    // Get all my cart products
    const fetchCarts = async () => {
        const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/my-card-product/${email}`);
        const data = await res.json();
        setCarts(data)
    }

    const udpateCart = () => {
        fetchCarts();
    }

    useEffect(() => {
        const myUser = user;
        const myEmail = myUser?.email;
        const colFun = async () => {
            const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/my-card-product/${myEmail}`);
            const data = await res.json();
            setCarts(data)
        }
        colFun();
    },[user])

    const cartsInfo = {
        carts,
        udpateCart,
    }

    return (
        <CartProduct.Provider value={cartsInfo}>
            {children}
        </CartProduct.Provider>
    );
};

CartProvider.propTypes = {
    children : PropTypes.node,
}

export default CartProvider;