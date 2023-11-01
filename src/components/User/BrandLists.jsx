import { useState } from 'react';
import { IoPencilSharp, IoTrashOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const BrandLists = () => {
    const getBrands = useLoaderData();
    const [brands, setBrands] = useState(getBrands);
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

                const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${id}`, {
                    method : "DELETE",
                });
                const data = await res.json();
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your brand has been deleted.',
                        'success'
                    )
                    const filter = brands?.filter(brand => brand._id != id )              
                    setBrands(filter);
                    toast("Delete Brand");
                }
            }
        })
    }
    return (
        <div className=''>
            <div className='mb-5 flex items-center justify-between'>
                <h1 className='text-xl lg:text-3xl text-secondary font-bold dark:text-white'>Brand lists</h1>
                <Link to={'/dashboard/add-brand'} className='px-4 text-sm md:text-base py-2 bg-primary rounded-md text-white font-semibold'>New Brand</Link>
            </div>
            <div className=''>
                <div className='overflow-x-auto'>
                    <table className="table-auto w-full border-collapse border border-slate-200">
                        <thead>
                            <tr>
                                <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-white'>Brand</th>
                                <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-white'>Image</th>
                                <th className='border border-slate-200 text-left text-secondary py-2 pl-3 dark:text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands?.map(brand =>  <tr key={brand._id}>
                                    <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>{brand?.name}</td>
                                    <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>
                                        <img src={brand?.logo} className='w-10' alt="" />
                                    </td>
                                    <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>
                                        <ul className='flex items-center justify-end gap-4'>
                                            <li> <Link to={`/dashboard/brands/${brand._id}`} className=''><IoPencilSharp /></Link> </li>
                                            <li> <span onClick={() => handelDelete(brand._id)} className='cursor-pointer'><IoTrashOutline /></span> </li>
                                        </ul>
                                    </td>
                                </tr>)
                            }
                                                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrandLists;