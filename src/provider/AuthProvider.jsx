import { createContext, useEffect, useState } from 'react';
import PropType from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../service/firebase/firebase';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Create user wiht email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
   
    // login
    const login  = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // name upate
    const userUpdate = (userInf) => {
        return updateProfile(auth.currentUser, userInf)
    }

    // Logout
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }


    // google login 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }



    useEffect(() => {
        const onSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            onSubscribe();
        }
    },[])

    const userInfo = {
        user,
        createUser,
        login,
        googleLogin,
        userUpdate,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropType.node
}

export default AuthProvider;