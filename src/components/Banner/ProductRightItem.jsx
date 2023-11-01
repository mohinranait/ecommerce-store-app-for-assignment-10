
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductRating from '../ProductRating';

const ProductRightItem = ({product}) => {
    const { _id, image, rating, title,price} = product || {};
    return (
        <>
            <li className='flex gap-3'>
                <div className='pright'>
                    <Link to={`/products/${_id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className='flex flex-col justify-around'>
                    <p><Link to={`/products/${_id}`} className='text-sm text-[#444444] dark:text-white '>{title}</Link></p>
                    <ProductRating rating={rating} />
                    <p className='text-base text-primary font-semibold '>${price} </p>
                </div>
            </li>   
        </>
    );
};

ProductRightItem.propTypes = {
    product : PropTypes.object
}

export default ProductRightItem;