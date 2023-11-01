
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const {user}  = useAuth();
    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-2xl md:text-3xl text-secondary font-bold dark:text-white'>Account - <span className='text-primary'>{user?.displayName}</span>  </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                <div>
                    <img src={user?.photoURL} className='w-[180px]' alt="" />
                </div>
                <div className='col-span-3'>
                    <ul className='space-y-3'>
                        <li className='text-secondary dark:text-white flex items-center gap-3'> Email: <span>{user?.email}</span></li>
                        <li className='text-secondary dark:text-white flex items-center gap-3'> Name: <span>{user?.displayName ? user?.displayName : '-/-'}</span></li>
                        <li className='text-secondary dark:text-white flex items-center gap-3'> Verifiy: 
                            <span>
                                {
                                    user?.emailVerified ? <span className='bg-green-100 text-green-600 px-5  rounded-md'>Active</span> :  
                                    <span className='bg-red-100 text-red-600 px-5  rounded-md'>Deactive</span>  }
                            </span>
                        </li>
                        <li className='text-secondary flex items-center gap-3 dark:text-white'> Registered: <span>{user?.metadata.creationTime ? user?.metadata.creationTime : '-/-'}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Account;