import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const brands = useLoaderData();
    const handelCreateProduct = async (e) => {
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
            const response = await fetch("https://assignment-10-server-theta-ivory.vercel.app/products", {
                method : "POST",
                headers : { "Content-type" : "application/json"},
                body : JSON.stringify(product),
            });
            const data = await response.json();
            if(data.insertedId){
                toast("New product added");
                form.reset();
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className=''>
            <div className='mb-5'>
                <h1 className='text-xl lg:text-3xl text-secondary font-bold dark:text-white '>New Product information </h1>
            </div>
            <div className=''>
                <form onSubmit={handelCreateProduct}>
                    <div className='grid grid-cols-1  gap-6 mb-5'>
                        <input type="text" name='title' className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Title' />
            
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5'>
                        <select name="brand_id" className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white dark:bg-[#0F172A]'>
                            <option value="">Brand </option>
                            {
                                brands?.map(item => <option key={item._id} value={item._id}>{item.name}</option> )
                            }
                        </select>
                        <select name="product_type" className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white dark:bg-[#0F172A]'>
                            <option value="">Product Type </option>
                            <option value="mobile">Mobile</option>
                            <option value="laptop">Laptop</option>
                            <option value="camera">Camera</option>
                            <option value="headphone">Headphone</option>
                            <option value="computer">Computer</option>
                        </select>
                        <input type="number" name='rating' className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Rating' />
                      
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5'>
                        <input type="number" name='price' className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Price' />
                        <input type="text" name='image' className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' placeholder='Image' />
                    </div>
                    <div className='grid grid-cols-1  gap-6 mb-5'>
                        <textarea name="description" id="" cols="30" className='px-3 w-full py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-white' rows="2"></textarea>
                    </div>
                   
                    <div className='grid grid-cols-1 '>
                        <button type='submit' className='bg-[#ce1446] text-white w-full py-3 px-5 rounded-md font-semibold'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;