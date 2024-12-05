import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
const Login = () => {

        const [formData, setFormData] = useState({
            email: '',
            password: '',
        });
    
        
    
        // Handle input change
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        // Handle form submission
        const handleSubmit = async (e) => {
            e.preventDefault();
            let res=    await axios.post('http://localhost:5000/api/login',formData)
            console.log(res.data,"resdata");
            localStorage.setItem('token',res.data)
    
        };
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 gap-28"
        >
            {/* Left Image Section */}
            <div className="hidden md:flex  items-center justify-center"
            >
                <img
                    src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp"
                    alt="Illustration"
                    className=""
                />
            </div>

            {/* Right Form Section */}
            <div className="  bg-white shadow-md rounded-lg p-8 w-[35%]"
                onClick={(e) => e.stopPropagation()}>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                    Log in to continue your   <br />  learning journey
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Discover a supportive community of online instructors. Get instant access to all course creation resources.
                </p>
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4 ">

                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input type="password"
                    placeholder="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                     className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                    {/* Buttons */}
                    <button className="bg-purple-600 text-white font-bold py-4 rounded-lg hover:bg-purple-700">
                        Login
                    </button>
                    
                </div>
                </form>

                <p className='mt-6 text-center'>----- Other log in options --------</p>
                <div className="flex justify-center mt-5 gap-5 ">
                    <span className='border  p-2'>

                        <FcGoogle />
                    </span>
                    <span className='border p-2'>

                        <FaFacebook />
                    </span>
                    <span className='border p-2'>

                        <FaApple />
                    </span>
                    <img src="" alt="" />
                </div>
                <p className='text-center mt-10 p-4 rounded-lg'>
                    Do not have an account?
                    <Link to="/singup">
                        <span className='text-purple-600 font-bold underline'>Sign up</span>
                    </Link>
                </p>

                <p className='text-center text-purple-600 font-bold underline mt-5'>Log in with your organization</p>
            </div>
        </div>
    );

}

export default Login