import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';
import LeftBrands from '../../components/LeftBrands';
import { useLoaderData } from 'react-router-dom';
import ProductRating from '../../components/ProductRating';
import { toast } from 'react-toastify';
import useCart from '../../hooks/useCart';
import { CartProduct } from '../../provider/CartProvider';
import useFetch from '../../hooks/useFetch';
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {

    const getProduct = useLoaderData();
    const {user} = useAuth();
    const {udpateCart} = useCart(CartProduct)
    const { _id, title, image,rating,price,description,product_type,brand_id} = getProduct || {};
    const {data:brand} = useFetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${brand_id}`);
   
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1)
    }
    
    const handleDecrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const addToCart = async id => {
        try {
            const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/add-to-card`, {
                method : "POST",
                headers : {"Content-type": "application/json"},
                body : JSON.stringify({product_id : id, user_email : user.email})
            });
            const data = await res.json();
            if(data.insertedId){
                udpateCart()
                toast("Product add your card");
            }
        } catch (error) {
            toast.error(error);
        }
    }
   
    return (
        <>
            <section className='mt-2 mb-10 lg:my-10'>
                <div className='px-5 container lg:px-0'>
                    <div className='grid lg:grid-cols-4 gap-6'>
                    
                        <div className='col-span-1 hidden lg:block'>
                            <LeftBrands />
                        </div>
                        <div className='lg:col-span-3 grid md:grid-cols-2 gap-6'>
                            <div className='bg-white flex items-center justify-center dark:bg-transparent'>
                                <div>
                                    <div>
                                        <img src={image} alt="" />
                                    </div>
                                </div>
                            </div>
                                
                            <div className=''>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-medium text-secondary dark:text-white'>{title}</h1>
                                    <div className='flex gap-3 items-center divide-x divide-gray-400'>
                                        <div className='flex items-center text-secondary dark:text-white'>
                                            <ProductRating rating={rating} />
                                            <span className='text-sm pl-2'>({rating}) Reviews</span>
                                        </div>
                                        <span className='text-sm pl-2'>Add your reviews</span>
                                    </div>
                                    <p className='text-3xl text-primary font-semibold'>${price}</p>
                                    <p className='  font-semibold'>
                                        <span className='text-green-600 font-normal'>In stock</span>
                                    </p>
                                    <p className=' text-sm text-secondary dark:text-white '> <span className='font-semibold text-gray-600'>Brand:</span> <span className='capitalize'>{brand?.name}</span> </p>
                                    <p className=' text-sm text-secondary dark:text-white '> <span className='font-semibold text-gray-600'>Type:</span> <span className='capitalize'>{product_type}</span> </p>
                                    {/* <p className=' text-sm text-secondary dark:text-white '> <span className='font-semibold text-gray-600'>SKU:</span> #154DTB </p> */}
                                    <p className='text-gray-500 text-sm'>{description}</p>
                                    <div className='flex items-center gap-5 '>
                                        <div className='border flex items-center rounded-md '>
                                            <input type="text" value={count} className='text-sm w-16 text-center rounded-l-md outline-none py-3 dark:bg-transparent dark:text-white' readOnly  />
                                            <div className='px-1 '>
                                                <span onClick={handleIncrement} className='cursor-pointer dark:text-white'> <HiOutlineChevronUp /> </span>
                                                <span onClick={handleDecrement} className='cursor-pointer dark:text-white'> <HiOutlineChevronDown /> </span>
                                            </div>
                                        </div>
                                        <button onClick={() => addToCart(_id)} className='uppercase text-base font-semibold bg-primary text-white px-6 py-3 rounded-md'>Add to card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;