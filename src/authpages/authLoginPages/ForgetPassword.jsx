import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ForgetPass from '../../assets/loginPageImages/forgetPass.png';

const ForgetPassword = () => {
  const [values, setValues] = useState({
    email: "", 
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      if (!values.email.trim()) {
        setError("Enter a valid email");
        return;
      } else {
        const response = await axios.post(
          "https://newsportalbackend-crdw.onrender.com/api/user/forgot-Password",
          values
        );
        console.log(response);
        alert(response.data.message);

        localStorage.setItem("email", values?.email);
        navigate("/password-verification");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className='flex w-[100%] flex-col-reverse items-center justify-center md:flex-row lg:h-screen md:h-screen h-full'>
      <div className="bg-white rounded-lg shadow-lg border border-[#878787] m-4 p-1">
        <div className="p-6 space-y-4 sm:p-8">
          <p className='py-2 text-xl text-[#282828]'>Welcome back!</p>

          <h1 className="text-xl mb-1 font-semibold md:text-2xl">
            Forget Password
          </h1>
          <p className='text-sm text-[#282828] w-[90%]'>
            Enter your registered email or phone number to receive a password reset link.
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-2">{error}</p>
          )}

          <form className="flex justify-center flex-col" onSubmit={submit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-zinc-800">
                Enter Email address / Phone Number
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={change}
                className="border mb-1 border-gray-300 rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="flex items-center justify-end mb-1.5 lg:mb-5 md:mb-2.5">
              <p className="text-sm font-light text-gray-500">
                Go back to <Link to='/log-in' className="font-medium hover:underline text-[#101450]">login</Link>
              </p>
            </div>

            <button
              type="submit"
              className="my-4 w-full text-white bg-[#101450] hover:bg-[#0e113f] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send Reset Link
            </button>

            <div>
              <p className="text-sm font-light flex justify-center">
                Don’t have an Account? <Link to="/sign-up" className="font-medium hover:underline text-[#101450]">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className='m-4'>
        <img src={ForgetPass} alt="Forget Password" className='size-70' />
      </div>
    </div>
  );
};

export default ForgetPassword;
