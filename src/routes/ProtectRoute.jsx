import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <>
            <div className='py-24'>
                <h1 className='text-3xl text-center text-primary font-bold'>loading...</h1>
            </div>
        </>
    }

    if(user){
        return children
    }

    return <Navigate to={'/login'} state={location?.pathname} /> ;
};

ProtectRoute.propTypes = {
    children : PropTypes.node,
}

export default ProtectRoute;