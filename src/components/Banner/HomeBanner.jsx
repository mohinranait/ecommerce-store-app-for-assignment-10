import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "./homeBanner.css"
import ProductRightItem from './ProductRightItem';
import LeftBrands from "../LeftBrands";

const HomeBanner = ({getProducts}) => {
   

    return (
        <section className='mt-1 mb-7 lg:my-10'>
            <div className='container'>
                <div className='grid lg:grid-cols-4 gap-5'>
                    <div className='lg:col-span-3 grid grid-cols-3 gap-5' >
                        <div className='hidden lg:block'>
                            <LeftBrands />
                        </div>
                        <div className='col-span-3 md:col-span-2'>
                            <div>
                            <Swiper className="mySwiper rounded-md"
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                                <SwiperSlide>
                                    <div className='rounded-md'>
                                        <img className="rounded-md w-full" src="https://magento2.magentech.com/themes/sm_clickboom/pub/media/wysiwyg/imageslider/home2/3.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='rounded-md'>
                                        <img className="rounded-md w-full" src="https://magento2.magentech.com/themes/sm_clickboom/pub/media/wysiwyg/imageslider/home2/1.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='rounded-md'>
                                        <img className="rounded-md w-full" src="https://magento2.magentech.com/themes/sm_clickboom/pub/media/wysiwyg/imageslider/home2/2.jpg" alt="" />
                                    </div>
                                </SwiperSlide>
                            
                            </Swiper>
                            </div>
                        </div>
                        <div className='advertizment'>
                            <div className='col-span-3 lg:col-span-1'>
                                <img className='w-full' src="https://magento2.magentech.com/themes/sm_clickboom/pub/media/wysiwyg/banner/banner-layout2-01.jpg" alt="" />
                            </div>
                            <div className='col-span-3 lg:col-span-1'>
                                <img className='w-full' src="https://magento2.magentech.com/themes/sm_clickboom/pub/media/wysiwyg/banner/banner-layout2-02.jpg" alt="" />
                            </div>
                            <div className='col-span-3 lg:col-span-1'>
                                <img className='w-full' src="https://magento2.magentech.com/themes/sm_clickboom/pub/media/wysiwyg/banner/banner-layout2-03.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                   
                    <div className='px-5 lg:px-0'>
                        <div className='bg-white border border-gray-200 dark:bg-[#1E293B] dark:border-secondary'>
                            <div className='px-6 py-4 bg-secondary text-white text-base uppercase font-semibold dark:bg-black'>Letest Products</div>
                            <ul className='p-3 space-y-4'>
                                {
                                    getProducts?.slice(0,4)?.map(product => <ProductRightItem key={product?._id} product={product} /> )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

HomeBanner.propTypes = {
    getProducts : PropTypes.array
}

export default HomeBanner;