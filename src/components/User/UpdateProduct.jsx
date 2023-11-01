import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const getProduct = useLoaderData();
    const [brands, setBrands] = useState([]);


    const handelUpdateProduct = async e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const brand_id = form.brand_id.value;
        const product_type = form.product_type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
       

        const product = {title,brand_id,price,product_type,image,rating,description}

        try {
            const response = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/products/${getProduct?._id}`, {
                method : "PUT",
                headers : { "Content-type" : "application/json"},
                body : JSON.stringify(product),
            });
            const data = await response.json();
            if(data.modifiedCount > 0){
                toast("Update product");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        const fetchBrands = async () => {
            const res = await fetch("https://assignment-10-server-theta-ivory.vercel.app/brands");
            const data = await res.json();
            setBrands(data);
        }
        fetchBrands();
    })
    return (
        <div className=''>
            <div className='mb-5'>
                <h1 className='text-3xl text-secondary font-bold dark:text-white'>Update Product information </h1>
            </div>
            <div className=''>
                <form onSubmit={handelUpdateProduct}>
                    <div className='grid grid-cols-1  gap-6 mb-5'>
                        <input type="text" name='title' defaultValue={getProduct?.title} className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Title' />
            
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5'>
                        <select name="brand_id" className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white dark:bg-[#0F172A]'>
                            <option value="">Brand </option>
                            {
                                brands?.map(item => <option key={item._id} value={item._id} selected={ getProduct?.brand_id == item._id && 'selected' }>{item.name}</option> )
                            }
                        
                        </select>
                        <select name="product_type" className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white dark:bg-[#0F172A]'>
                            <option value="">Product Type </option>
                            <option value="mobile" selected={ getProduct?.product_type == 'mobile' && 'selected' }>Mobile</option>
                            <option value="laptop" selected={ getProduct?.product_type == 'laptop' && 'selected' }>Laptop</option>
                            <option value="camera" selected={ getProduct?.product_type == 'camera' && 'selected' }>Camera</option>
                            <option value="headphone" selected={ getProduct?.product_type == 'headphone' && 'selected' }>Headphone</option>
                            <option value="computer" selected={ getProduct?.product_type == 'computer' && 'selected' }>Computer</option>
                        </select>
                        <input type="number" name='rating' defaultValue={getProduct?.rating} className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Rating' />
                    
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5'>
                        <input type="number" name='price' defaultValue={getProduct?.price} className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Price' />
                        <input type="text" name='image' defaultValue={getProduct?.image} className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Image' />
                    </div>
                    <div className='grid grid-cols-1  gap-6 mb-5'>
                        <textarea name="description" defaultValue={getProduct?.description} id="" cols="30" className='px-3 w-full py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' rows="2"></textarea>
                    </div>
                
                    <div className='grid grid-cols-1 '>
                        <button type='submit' className='bg-[#ce1446] text-white w-full py-3 px-5 rounded-md font-semibold'>Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;