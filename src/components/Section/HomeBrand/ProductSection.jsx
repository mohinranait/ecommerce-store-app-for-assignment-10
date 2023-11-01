import PropTypes from 'prop-types';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import ProductCard from '../../ProductCard';

const ProductSection = ({products}) => {
    return (
        <section className='py-10'>
            <div className="container relative px-5 lg:px-0">
                <div className='flex items-center py-3 mb-3 border-b-2 border-gray-200 dark:border-black'>
                    <div className='text-lg font-semibold text-secondary dark:text-white'><span className='text-primary'>Features</span> Products</div>
                </div>
                <div className=''>
                    <Swiper
                        spaceBetween={20}
                        loop={true}
                        navigation={true} 
                        breakpoints={{
                            540: {
                              slidesPerView: 2,
                              spaceBetween: 0,
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 20,
                            },
                            1100: {
                              slidesPerView: 4,
                              spaceBetween: 20,
                            },
                            1200: {
                              slidesPerView: 5,
                              spaceBetween: 20,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            products?.map(product =>  <SwiperSlide key={product._id}>
                                <ProductCard product={product} />
                            </SwiperSlide> )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

ProductSection.propTypes = {
    products : PropTypes.array
}

export default ProductSection;