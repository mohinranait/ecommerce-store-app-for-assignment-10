import HomeBanner from '../../components/Banner/HomeBanner';
import HomeBrandSection from '../../components/Section/HomeBrand/HomeBrandSection';
import NewArrived from '../../components/Section/HomeBrand/NewArrived';
import ProductSection from '../../components/Section/HomeBrand/ProductSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const getProducts = useLoaderData();
    return (
        <>
            <HomeBanner getProducts={getProducts} />
            <HomeBrandSection  />
            <ProductSection products={getProducts} />
            <NewArrived getProducts={getProducts} />
        </>
    );
};

export default Home;