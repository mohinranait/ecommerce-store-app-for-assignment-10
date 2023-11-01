import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmailLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {googleLogin} = useAuth();
    const handleGoogleLogin = async () => {
       
        try {
            await googleLogin();
            toast.success("Login Successfull");
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            toast.error(error.message)
        }
       
    }
    return (
        <>
              
              <button onClick={handleGoogleLogin} type='button' className='px-5 py-3 rounded-md bg-[#EE6358] text-white font-medium '> <FaGoogle></FaGoogle></button>   
        </>
    );
};

export default EmailLogin;