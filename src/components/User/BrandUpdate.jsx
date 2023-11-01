import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const BrandUpdate = () => {
    const getBrand= useLoaderData();

    const handleBrandUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const logo = form.logo.value;
        const banner1 = form.banner1.value;
        const banner2 = form.banner2.value;
        const banner3 = form.banner3.value;
        const banner = [banner1, banner2, banner3];
        const brand = {name, logo ,banner};
        try {
            const response = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${getBrand?._id}`, {
                method : "PUT",
                headers : {"Content-type":"application/json"},
                body : JSON.stringify(brand),
            })
            const data = await response.json();
            if( data.modifiedCount > 0 ){
                toast("Updated Brand");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className=''>
            <div className='mb-5'>
                <h1 className='text-3xl text-secondary font-bold dark:text-white'>Update Brand </h1>
            </div>
            <div className=''>
                <form onSubmit={handleBrandUpdate}>
                    <div className='grid grid-cols-1  gap-6 mb-5'>
                        <input type="text" name='name' defaultValue={getBrand?.name} required className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-gray-200' placeholder='Name' />
                    </div>
                    
                    <div className='grid grid-cols-1 gap-6 mb-5'>
                        <input type="text" name='logo' defaultValue={getBrand?.logo} required className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-gray-200' placeholder='Image URL' />
                    </div>
                    <p className='text-xl text-gray-700 font-semibold mb-2 mt-5'>Banners</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5'>
                        <input type="text" name='banner1' defaultValue={getBrand?.banner[0]} required className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-gray-200' placeholder='Banner Image' />
                        <input type="text" name='banner2' defaultValue={getBrand?.banner[1]} required className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-gray-200' placeholder='Banner Image' />
                        <input type="text" name='banner3' defaultValue={getBrand?.banner[2]} required className='px-3 py-3 text-secondary rounded-md bg-transparent border border-gray-300 dark:text-gray-200' placeholder='Banner Image' />
                    </div>
                    <div className='grid grid-cols-1 '>
                        <button type='submit' className='bg-[#ce1446] text-white w-full py-3 px-5 rounded-md font-semibold'>Update Brand</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BrandUpdate;