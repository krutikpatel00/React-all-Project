import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { GrInstallOption } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const StikeyHeader = () => {
      const [isSticky, setSticky] = useState(false);
      useEffect(() => {
            const handleScroll = () => {
                  // When the user scrolls, check if the scroll position is greater than 0
                  // If it is, add the 'sticky' class, otherwise remove it
                  if (window.scrollY > 0) {
                        setSticky(true);
                  } else {
                        setSticky(false);
                  }
            };

            // Add scroll event listener when component mounts
            window.addEventListener('scroll', handleScroll);

            // Cleanup the event listener when component unmounts
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);
      return (
            <div className={`home ms-[380px] me-[10px] mt-4${isSticky ? 'fixed top-0 right-0 left-0 ms-[380px] bg-slate-700 z-[9999] shadow-md' : ''}`} >
                  <div className='py-3 px-6 bg-[#1A1A1A] '>
                        <div className="flex items-center justify-between">
                              <div className='flex'>
                                    <Link className='text-white h-10 w-10 text-2xl bg-slate-900 rounded-full flex justify-center items-center' ><IoIosArrowBack /></Link>
                                    <Link className='ms-2 text-white h-10 w-10 text-2xl bg-slate-900 rounded-full flex justify-center items-center'><IoIosArrowForward /> </Link>
                              </div>
                              <div className='flex items-center'>
                                    <Link className='text-black bg-white font-[600] text-sm py-1 px-4 rounded-full'>Explore Premium</Link>
                                    <Link className='bg-black flex items-center text-white ms-4  font-[400] text-sm py-1 px-4 rounded-full'> <GrInstallOption className='me-2' />Install App</Link>
                                    <Link className='flex justify-center items-center h-8 w-8 ms-2 text-xl bg-black rounded-full'><IoMdNotificationsOutline className='text-white sm' /></Link>
                                    <Link className='flex justify-center items-center h-8 w-8 ms-2 text-sm bg-black rounded-full'><FaUser className='text-white sm' /></Link>
                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default StikeyHeader