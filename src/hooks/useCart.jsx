import { useContext } from 'react';
import { CartProduct } from '../provider/CartProvider';

const useCart = () => {
    const carts = useContext(CartProduct)
    return carts;
};

export default useCart;