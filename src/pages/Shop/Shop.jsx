import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

const Shop = () => {

    const [products, setProducts] = useState([])
    const [totalProducts,setTotalProducts] = useState([]); 

    // paginations
    const [parPage, setParPage] = useState(5)
    const [current, setCurrent] = useState(0);
    const totalPages  = Math.ceil(totalProducts / parPage );
    const pages = [ ...Array(totalPages).keys() ]



    const handleCurrentPage = (currentPage) => {
        setCurrent(currentPage);
        
    }

    const handleParPageProducts = (e) => {
        const value = parseInt(e.target.value);
        setParPage(value)
        setCurrent(0)
    }

    const handleIncrement = () => {
        if(totalPages-1 > current){
            setCurrent(current + 1)
        }
    }

    const handleDecrement = () => {
        if( current > 0 ){
            setCurrent(current - 1)
        }
    }

    const fetchPaginationProduct = useCallback( async () => {
        const response = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/prdouct-page?page=${current}&size=${parPage}`);
        const result = await response.json();
        setProducts(result);
    },[current, parPage])


    useEffect(() => {
        fetchPaginationProduct()
    },[fetchPaginationProduct])


    useEffect(() => {
        const fetchTotalProductCount = async () => {
            const response = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/totalProducts`);
            const {count} = await response.json();
            setTotalProducts(count)
        }
        fetchTotalProductCount();
    },[]);

     return (
    <section className='py-10'>
        <div className="container relative px-5 lg:px-0">
            <div className='flex items-center py-3 mb-3 border-b-2 justify-between border-gray-200 dark:border-black'>
                <div className='text-lg font-semibold text-secondary dark:text-white'><span className='text-primary'>Features</span> Products</div>
                <div className='text-lg font-semibold text-secondary dark:text-white flex gap-5 items-center'>
                    <ul className='flex gap-3 items-center'>
                        <li><button onClick={handleDecrement} className='py-1 px-3 inline-block border'>Prev</button></li>
                        {
                            pages?.map(page   =>  <li key={page}><button onClick={()=>handleCurrentPage(page)} className={`py-1 px-3 inline-block border ${current === page && 'border-primary bg-primary text-white'} `}>{page}</button></li> )
                        }
                        <li><button onClick={handleIncrement} className='py-1 px-3 inline-block border'>Next</button></li>
                    </ul>
                    <div>
                        <select name="" onChange={handleParPageProducts} className='py-1 px-4' id="">
                            <option value="5">5</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {
                    products?.map(product =>  <ProductCard key={product?._id} product={product} /> )
                }
               
            </div>
        </div>
    </section>
    );
};

export default Shop;