import PropTypes from 'prop-types';

const CartitemTd = ({cart,index,handleCartDelete}) => {
    const {_id, title,price,image} = cart || {};
 
    return (
        <>
            <tr className='border-b'>
                <td className='text-left px-3 py-3 text-secondary dark:text-gray-200'>{++index}</td>
                <td className='text-left px-3 py-3'>
                    <div>
                        <img src={image} className='w-20 h-20' alt="" />
                    </div>
                </td>
                <td className='text-left px-3 py-3 text-secondary dark:text-gray-200'>{title}</td>
                <td className='text-left px-3 py-3 text-secondary dark:text-gray-200'>${price}</td>
                <td className='text-left px-3 py-3 text-secondary dark:text-gray-200'>
                    <div className='flex items-center justify-end'>
                        <button onClick={() => handleCartDelete(_id) } className='px-3 py-1 inline-block bg-primary rounded-md text-white'>Remove</button>
                    </div>
                </td>
            </tr>
        </>
    );
};

CartitemTd.propTypes = {
    handleCartDelete: PropTypes.func,
    index: PropTypes.number,
    cart: PropTypes.object
}

export default CartitemTd;