import React from 'react';
import { Link } from 'react-router-dom';
import successPassReset from '../../assets/loginPageImages/successPassReset.png';

const PassResetSuccessfully = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center h-full md:h-screen lg:h-screen p-4'>
      {/* Image Section */}
      <div className='m-4'>
        <img src={successPassReset} alt="Password reset successful" className='size-70' />
      </div>

      {/* Text and Button Section */}
      <div className='max-w-md w-full flex flex-col items-center justify-center text-center'>
        <h1 className='text-xl md:text-2xl font-semibold mb-2'>
          Your password has been successfully reset!
        </h1>
        <p className='text-sm text-[#80807F] mb-8'>
          You can now log in with your new password.
        </p>

        <Link to='/log-in' className='w-full'>
          <button
            type='button'
            className='w-full text-white bg-[#101450] hover:bg-[#151a7a] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PassResetSuccessfully;
