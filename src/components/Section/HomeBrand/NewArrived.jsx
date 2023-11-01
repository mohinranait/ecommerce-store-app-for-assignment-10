import PropTypes from 'prop-types';

import ProductRightItem from '../../Banner/ProductRightItem';

const NewArrived = ({getProducts}) => {
    return (
        <section className='py-10'>
            <div className="container relative px-5 lg:px-0">
                <div className='flex items-center py-3 mb-3 border-b-2 border-gray-200 dark:border-black'>
                    <div className='text-lg font-semibold text-secondary dark:text-white '> <span className='text-primary '>New</span> Arrived</div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                        getProducts?.slice(0,9)?.map(product => <ProductRightItem key={product?._id} product={product} /> )
                    }
                </div>
            </div>
        </section>
    );
};

NewArrived.propTypes = {
    getProducts : PropTypes.array
}

export default NewArrived;