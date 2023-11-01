import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import EmailLogin from '../../components/SocilaLogin/EmailLogin';


const Register = () => {
    const {createUser,userUpdate} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

         // Name validation
         if( name.length == 0){
            toast.error("Name filed is require");
            return ;
        }

        
        // Email validation
        if( email.length == 0){
            toast.error("Email filed is require");
            return ;
        }

        // password validation
        const spacialCharecter = /[\W_]/g;
        const capitalLetter = /[A-Z]/;
        if(password.length < 6) {
            toast.error("Password is less than 6 characters");
            return ;
        } else if( !spacialCharecter.test(password) ){
            toast.error("Don't have a special character");
            return ;
        } else if(!capitalLetter.test(password)) {
            toast.error("don't have a capital letter");
            return ;
        }

        try {
            const user = await createUser(email, password);
            if( user.user ){
                await userUpdate({
                    displayName : name,
                    photoURL : photo,
                });
                const newUser = {name ,email, photo}
                try {
                    const res = await fetch("https://assignment-10-server-theta-ivory.vercel.app/users", {
                        method : "POST",
                        headers : {"Content-type":"application/json"},
                        body : JSON.stringify(newUser)
                    });
                    const data = await res.json();
                    
                } catch (error) {
                    toast.error(error.message);
                }
            }
            toast.success("Register Successfull")
            navigate('/');
        } catch (error) {
        
            if( error.message == 'Firebase: Error (auth/email-already-in-use).'){
                toast.error("This email already exists");
                return
            }else{
                toast.error(error.message);
                return
            }
        }

    }

    return (
        <section className=''>
            <div className=' min-h-screen py-28' >
                <div className="container flex items-start">
                    <div className=" w-[300px] md:w-[450px] overflow-hidden  mx-auto rounded-lg">
                        
                            <div className='px-5 py-5 md:px-10 md:pb-10 rounded-b-lg bg-secondary '>
                                <div className='text-3xl pb-5 font-semibold text-gray-200'>Register Form</div>
                                <div>
                                    <form onSubmit={handleRegister}>
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Full Name</label>
                                            <input type="text" name='name' placeholder='Full Name' className='px-3 w-full py-3 bg-[#2d373D] border border-gray-600 text-white rounded-md outline-none' />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Image URL</label>
                                            <input type="text" name='photo' placeholder='Image URL' className='px-3 w-full py-3 bg-[#2d373D] border border-gray-600 text-white rounded-md outline-none' />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Email</label>
                                            <input type="email" name='email' placeholder='Email' className='px-3 w-full py-3 bg-[#2d373D] border border-gray-600 text-white rounded-md outline-none' />
                                        </div>
                                        <div className='mb-5'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Password</label>
                                            <input type="password" name='password' placeholder='Password' className='px-3 w-full py-3 bg-[#2d373D] border border-gray-600 text-white rounded-md outline-none' />
                                        </div>
                                        <div className='mb-4 flex gap-5'>
                                            <button type='submit' className='px-5 py-3 rounded-md bg-primary text-white font-medium w-full'>Sign Up</button>
                                           <EmailLogin />
                                        </div>
                                    </form>
                                </div>
                                <p className='text-center text-white'>Already have a  account ? <Link to={'/login'} className='text-primary'>Sign In</Link> </p>
                                
                            </div>
                    
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Register;