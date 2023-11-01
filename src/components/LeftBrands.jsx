
import { HiOutlinePlusSmall, HiSquares2X2 } from 'react-icons/hi2';
import useFetch from '../hooks/useFetch';
import CategoryItem from './category/CategoryItem';

const LeftBrands = () => {
    const {data:brands} = useFetch("https://assignment-10-server-theta-ivory.vercel.app/brands");
    return (
        <>
            <div className='bg-white border border-gray-200 dark:border-secondary dark:bg-[#1E293B]'>
                <div className='px-6 py-4 bg-secondary text-white text-base uppercase font-semibold dark:bg-black'>Brands</div>
                <ul>
                    {
                        brands?.map(brand => <CategoryItem key={brand._id} brand={brand} />)
                    }
                    <li>
                        <a  className='flex items-center py-[15.3px] hover:text-white text-secondary px-5 gap-3 hover:bg-primary dark:text-white'>
                            <span className=' text-xs'> <HiSquares2X2 /> </span>
                            <span className=' font-medium text-sm '>Redmi</span>
                            <span className='ml-auto '><HiOutlinePlusSmall /></span>
                        </a>
                    </li>  
                    <li>
                        <a  className='flex items-center py-[15.3px] hover:text-white text-secondary px-5 gap-3 hover:bg-primary dark:text-white'>
                            <span className=' text-xs'> <HiSquares2X2 /> </span>
                            <span className=' font-medium text-sm '>Infinix</span>
                            <span className='ml-auto '><HiOutlinePlusSmall /></span>
                        </a>
                    </li>  
                    <li>
                        <a  className='flex items-center py-[15.3px] hover:text-white text-secondary px-5 gap-3 hover:bg-primary dark:text-white'>
                            <span className=' text-xs'> <HiSquares2X2 /> </span>
                            <span className=' font-medium text-sm '>Redmi</span>
                            <span className='ml-auto '><HiOutlinePlusSmall /></span>
                        </a>
                    </li>  
                </ul>  
            </div> 
        </>
    );
};

export default LeftBrands;