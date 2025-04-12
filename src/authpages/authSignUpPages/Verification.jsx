import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing the navigate hook
import succesPassReset from '../../assets/loginPageImages/successPassReset.png';

const Verification = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleContinue = () => {
    navigate('/'); // Redirect to login page (or to home page, depending on your requirement)
  };

  return (
    <div className='flex flex-col w-[100%] items-center justify-center lg:h-screen md:h-screen h-full'>
      <div className='m-4'>
        <img src={succesPassReset} alt="Verification Successful" className='size-70'/>
      </div>
      <div className='lg:w-100 flex flex-col items-center justify-center p-4 m-4'>
        <div>
          <h1 className="text-xl mb-1 font-semibold md:text-2xl text-center">
            Verification Successful
          </h1>
          <p className='text-sm text-[#80807F] text-center mb-10'>Your Verification has been done successfully</p>
        </div>
        <button
          onClick={handleContinue} // Handling the button click to navigate
          className="lg:mb-6 md:mb-3 mb-2 w-full text-white bg-[#101450] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Verification;


