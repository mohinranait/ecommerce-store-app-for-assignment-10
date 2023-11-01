import { useEffect, useState } from 'react';
import { IoPencilSharp, IoTrashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

const TableProductCard = ({product,handelDelete}) => {
    const [brand, setBrand] = useState({});
    const {_id, brand_id, image, title,price,product_type} = product || {};
    useEffect(() => {
        const fetchBrand = async () => {
            const res = await fetch(`https://assignment-10-server-theta-ivory.vercel.app/brands/${brand_id}`);
            const data = await res.json();
            setBrand(data);
        }
        fetchBrand()
    },[brand_id])
    return (
        <>
            <tr >
                <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>{title}</td>
                <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>
                    <img src={image} className='w-10' alt="" />
                </td>
                <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>${price}</td>
                <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>{brand.name}</td>
                <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>{product_type}</td>
                <td className='border border-slate-200 px-3 py-2 text-secondary dark:text-gray-300'>
                    <ul className='flex items-center justify-end gap-4'>
                        <li> <Link to={`/dashboard/products/${_id}`} className=''><IoPencilSharp /></Link> </li>
                        <li> <span onClick={() => handelDelete(_id)} className='cursor-pointer'><IoTrashOutline /></span> </li>
                    </ul>
                </td>
            </tr>   
        </>
    );
};

TableProductCard.propTypes = {
    product:PropTypes.object.isRequired,
    handelDelete : PropTypes.func.isRequired,
}

export default TableProductCard;