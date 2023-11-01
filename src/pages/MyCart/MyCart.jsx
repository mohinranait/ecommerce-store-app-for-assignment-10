import { toast } from "react-toastify";
import CartitemTd from "../../components/CartitemTd";
import useCart from "../../hooks/useCart";


const MyCart = () => {
    const {carts,udpateCart} = useCart();

    const handleCartDelete = async (id) => {
        try {
            const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/cart-delete/${id}`,{
                method : "DELETE",
            });
            const data = await res.json();
            if(data.deletedCount > 0){
                udpateCart()
                toast("Remove cart item ");
            }
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <>
            <section className='py-20'>
                <div className="container overflow-x-auto">
                    <table className='border-collapse table-auto w-full border'>
                        <thead>
                            <tr className='border-b'>
                                <th className='text-left px-3 py-3 text-secondary dark:text-white'>#</th>
                                <th className='text-left px-3 py-3 text-secondary dark:text-white'>Image</th>
                                <th className='text-left px-3 py-3 text-secondary dark:text-white'>Product</th>
                                <th className='text-left px-3 py-3 text-secondary dark:text-white'>Price</th>
                                <th className='text-left px-3 py-3 text-secondary dark:text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts?.map((cart,index) => <CartitemTd key={cart?._id} handleCartDelete={handleCartDelete} cart={cart} index={index} /> )
                            }
                        </tbody>
                    </table>
                </div>
            </section>   
        </>
    );
};

export default MyCart;