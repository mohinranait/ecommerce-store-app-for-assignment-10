
import { Swiper, SwiperSlide } from "swiper/react";
import Banneritem from "./Banneritem";
import ProductCard from "../../components/ProductCard";
import { useLoaderData } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const BrandWishProduct = () => {
    const getBrand = useLoaderData();
    const {data:products} = useFetch(`https://assignment-10-server-theta-ivory.vercel.app/brand-wish/${getBrand?._id}`);
    return (
        <>
            <section>
                <div className="container px-4 lg:px-0">
                    <div className="grid grid-cols-12 items-center gap-6 bg-white mt-2 lg:my-10 dark:bg-[#1E293B]">
                        <div className="brandinfo">
                            <div>
                                <div className="w-40 h-40 rounded-full border border-gray-300 mx-auto mb-5">
                                    <img className="object-contain ring-2 ring-slate-100 dark:ring-black object-center w-full h-full  rounded-full" src={getBrand?.logo} alt={getBrand?.name} />
                                </div>
                                <p className="text-xl font-semibold  text-center text-secondary dark:text-gray-200">{getBrand?.name}</p>
                                <p className="text-base font-semibold  text-center text-gray-500">{products?.length} <span className="text-sm">products</span></p>
                            </div>
                        </div>
                        <div className="order1 lg:order-2 col-span-12 lg:col-span-9 lg:p-4">
                            <Swiper className="mySwiper rounded-md"
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                {
                                    getBrand?.banner?.map((banner,index) =>   <SwiperSlide key={index}>
                                        <Banneritem banner={banner} />
                                    </SwiperSlide>  )
                                }
                              
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </section>  

            <section className="pt-10 pb-20">
                <div className="container px-4 lg:px-0">
                    <p className="text-2xl mb-3 text-secondary dark:text-gray-200 font-semibold "> <span className="text-primary">{getBrand?.name}</span> products ({products?.length}) </p>
                    <div className="bproduct">
                        {
                            products?.map(product => <ProductCard key={product._id} product={product} /> )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default BrandWishProduct;