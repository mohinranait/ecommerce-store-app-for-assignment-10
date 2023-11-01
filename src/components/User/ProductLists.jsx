import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import TableProductCard from './TableProductCard';

const ProductLists = () => {
    const getProducts = useLoaderData();
    const [products, setProducts] = useState(getProducts);

    const handelDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( async (result) => {
            if (result.isConfirmed) {

                const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/products/${id}`, {
                    method : "DELETE",
                });
                const data = await res.json();
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                      )
                    const filter = products?.filter(product => product._id != id );
                    setProducts(filter)
                    toast("Delete successfull");
                }
            }
        })
       
    }

    

    return (
        <div className=''>
        <div className='mb-5 flex items-center justify-between'>
            <h1 className='text-xl lg:text-3xl text-secondary font-bold dark:text-white'>Product lists</h1>
            <Link to={'/dashboard/add-product'} className='px-4 text-sm md:text-base py-2 bg-primary rounded-md text-white font-semibold'>New Product</Link>
        </div>
        <div className=''>
            <div className='overflow-x-auto'>
                <table className="table-auto w-full border-collapse border border-slate-200">
                    <thead>
                        <tr>
                            <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-gray-200'>Product</th>
                            <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-gray-200'>Image</th>
                            <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-gray-200'>Price</th>
                            <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-gray-200'>Brand</th>
                            <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-gray-200'>Type</th>
                            <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-gray-200'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product =>  <TableProductCard key={product._id} handelDelete={handelDelete} product={product} /> )
                        }
                                            
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default ProductLists;