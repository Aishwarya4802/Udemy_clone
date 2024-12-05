import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb"; 
import { Link } from 'react-router-dom';



const  NavBar = () => {
   
    return (
        <>
         
        <div className='max-w-[1000px] mx-auto'>
            <div className='flex items-center gap-5  h-[80px]'>

                <div className='w-[91px] h-[34px]'>
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
                </div>


                <div className='cursor-pointer text-[#646363]'>
                    <p>Category</p>
                </div>

                <div className='flex items-center gap-1 border border-zinc-350 p-2 w-[350px]  rounded-full px-3'>
                    <IoSearch className='text-2xl text-zinc-500' />
                    <input className='border-0 outline-none w-[100%]' type="text" placeholder='Search for anything...' />
                </div>

                <nav className='flex gap-4 items-center ml-10'>
                    <li className='list-none text-zinc-600 cursor-pointer'>Plane & Pricing</li>
                    <li className='list-none text-zinc-600 cursor-pointer'>Udamy Business</li>
                    <li className='list-none text-zinc-600 cursor-pointer'>Teach on Udamy</li>
                    <li className='list-none text-zinc-600 text-1xl cursor-pointer ml-5'><MdOutlineShoppingCart /></li>
                     
                   <Link to="/Login">
                    <button className='border border-zinc-500 rounded py-[8px] w-[80px]'>Log in</button>
                   </Link>
                    <Link to="/singup">
                    <button  className='bg-[#2d2f31]  w-[90px] rounded py-[8px] text-white '>
                        Sign up
                        </button>
                    </Link>
                     
                    <p className='bg-[#2d2f31]  rounded p-[11px] text-white cursor-pointer'><TbWorld className='text-xl font-semibold'/></p>
                </nav>
            </div>
        </div>
 
            <hr className='w-full h-10'/>
        </>
    )
}

export default  NavBar
