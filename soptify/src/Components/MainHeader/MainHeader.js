import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { SpotifyContext } from '../../Context/SpotifyProvider';

const MainHeader = () => {
      const { logOut } = useContext(SpotifyContext)
      return (
            <div className='w-[380px] fixed top-4 bottom-4 left-0 z-[999999]'>
                  <div className='main-header h-full'>
                        <div className='bg-[#121212] p-6 rounded-md mx-2 '>
                              <ul>
                                    <li>
                                          <Link to='/' className='text-white flex items-center text-xl py-2' ><IoHome className='me-4' /> Home</Link>
                                    </li>
                                    <li>
                                          <Link to='/search' className='text-white flex items-center text-xl py-2'> <FaSearch className='me-4' />Search</Link>
                                    </li>
                              </ul>
                        </div>
                        <div className='bg-[#121212] p-6 rounded-md m-2  h-4/5'>
                              <ul className='flex justify-between items-center '>
                                    <li>
                                          <Link className='text-white flex items-center text-xl '><VscLibrary className='me-4' /> Your Library</Link>
                                    </li>
                                    <li>
                                          <div className='flex items-center'>
                                                <Link className='text-white hover:rounded-full h-10 w-10 flex items-center justify-center hover:bg-slate-900 text-xl '><FaPlus /></Link>
                                                <Link className='text-white hover:rounded-full h-10 w-10 flex items-center justify-center hover:bg-slate-900 text-xl '><FaArrowRight /></Link>
                                                <button onClick={()=>logOut()} className='text-white'>logOut</button>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

export default MainHeader