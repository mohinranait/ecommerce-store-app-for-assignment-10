import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import ProductRating from './ProductRating';
import { HiPencil } from "react-icons/hi2";
import { useEffect, useState } from 'react';

const ProductCard = ({product}) => {
    const location = useLocation();
    const [brand, setBrand] = useState({});
    const brandUrl = location?.pathname?.split('/')[1];
    const { _id,title, image,price,rating,brand_id,product_type} = product || {};


    
    useEffect(() => {
        const fetchBrand = async () => {
            const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${brand_id}`);
            const data = await res.json();
            setBrand(data);
        }
        fetchBrand()
    },[brand_id])
    return (
        <>
            <div className={`product-card ${location.pathname == '/shop'? 'border':''}` }>
                <div className='relative '>
                    <Link to={`/products/${_id}`} >
                        <img src={image} alt="" />
                    </Link>
                    {
                        brandUrl == 'brand' &&    <Link to={`/dashboard/products/${_id}`} className='py-2 bg-primary text-xs font-semibold w-full text-center text-white absolute bottom-0 left-0 flex items-center justify-center gap-2'>Update <HiPencil /> </Link>
                    }
                </div>
                <p className='px-4 pt-4 text-sm text-gray-500 hover:text-gray-700 flex justify-between items-center'><Link to={`/brand/${brand._id}`} >{brand.name}</Link> {brandUrl == 'brand' && <span>{product_type}</span> } </p>
                <p className='px-4 '><Link to={`/products/${_id}`} className='text-sx font-medium text-secondary dark:text-white'>{title}</Link></p>
                <div className='px-4'>
                    <ProductRating rating={rating}  />
                </div>
                <div className='flex-grow'></div>
                <div className='pbottom'>
                    <div ><span className='text-primary font-bold'>${price}</span> <del className='text-xs text-gray-400'>$150</del> </div>
                    <div>
                        <Link to={`/products/${_id}`} className=' inline-block text-primary text-sm font-semibold '>Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

ProductCard.propTypes = {
    product : PropTypes.object
}

export default ProductCard;