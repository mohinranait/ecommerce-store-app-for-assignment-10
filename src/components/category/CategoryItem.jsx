import PropTypes from 'prop-types';
import { HiOutlinePlusSmall, HiSquares2X2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const CategoryItem = ({brand}) => {
    return (
        <>
            <li>
                <Link to={`/brand/${brand._id}`} className='flex items-center py-[15.3px] hover:text-white text-secondary px-5 gap-3 hover:bg-primary dark:text-white'>
                    <span className=' text-xs'> <HiSquares2X2 /> </span>
                    <span className=' font-medium text-sm '>{brand.name}</span>
                    <span className='ml-auto '><HiOutlinePlusSmall /></span>
                </Link>
            </li>   
        </>
    );
};

CategoryItem.propTypes = {
    brand : PropTypes.object.isRequired,
}

export default CategoryItem;