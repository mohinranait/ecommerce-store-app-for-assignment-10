import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuth = () => {
    const allInfo = useContext(AuthContext)
    return allInfo;
};

export default useAuth;