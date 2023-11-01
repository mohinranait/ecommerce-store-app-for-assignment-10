import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


const HomeBrandSection = () => {
    const {data:brands} = useFetch("https://assignment-10-server-theta-ivory.vercel.app/brands");
    
 
    return (
        <section>
            <div className="container px-5 lg:px-0">
                <div className='brandgrid'>
                    {
                        brands?.map(brand =>  <div key={brand._id} className='brand-card'>
                            <div className='flex flex-col '>
                                <div className='brandimg'>
                                    <Link to={`/brand/${brand._id}`}>
                                        <img className='mx-auto w-full h-full rounded-md bg-gray-100' src={brand.logo} alt={brand.name} />
                                    </Link>
                                </div>
                                <div className='text-center'>
                                    <Link to={`/brand/${brand._id}`} className='dark:text-white' >{brand.name}</Link>
                                </div>
                            </div>
                    </div> )
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeBrandSection;