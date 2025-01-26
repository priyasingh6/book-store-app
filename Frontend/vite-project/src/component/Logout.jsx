import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear the user data in the state
      setAuthUser(null); // Reset the authUser state to null (or an empty object if you use that structure)
      
      // Clear user data from localStorage
      localStorage.removeItem("users");

      // Show success message
      toast.success(  'Logout Successful' );
   setTimeout(() => {
    
     window.location.reload();
   },3000);
    
    } catch (error) {
      toast.error('Error: ' + error.message || error);
    }
  };

  return (
    <div>
      <button
        className='px-4 py-2 border-1 bg-gray-100 text-red-900 font-bold text-lg border-gray-200 hover:text-white hover:bg-red-600  hover:font-bolder duration-300 text-sm rounded-md shadow-lg cursor-pointer'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
