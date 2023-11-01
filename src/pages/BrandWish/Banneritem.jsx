import PropTypes from 'prop-types';

const Banneritem = ({banner}) => {
    return (
        <>
            <div className='rounded-md  bg-gray-200'>
                <img className='w-full h-[200px] md:h-[300px] lg:h-[400px]' src={banner} alt="" />
            </div>   
        </>
    );
};

Banneritem.propTypes = {
    banner : PropTypes.string
}

export default Banneritem;