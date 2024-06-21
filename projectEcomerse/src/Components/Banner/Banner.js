import React from 'react'

const Banner = () => {
      return (
            <section className='bg-[#F7FAFC] pt-4 font-[Inter]'>
                  <div className="container mx-auto px-4">
                        <div className="flex flex-wrap p-4 bg-white border border-[#DEE2E7] rounded-lg">
                              <div className="w-1/5">
                                    <div className="banner-items pe-4">
                                          <ul className='flex flex-col'>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Automobiles</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Clothes and wear</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Home interiors</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Computer and tech</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Tools, equipments</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Sports and outdoor</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Animal and pets</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>Machinery tools</a>
                                                </li>
                                                <li>
                                                      <a href={'./'} className='py-2 px-2 hover:bg-[#E5F1FF] w-full inline-block'>More category</a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="w-[60%]">
                                    <div className="banner-items">
                                          <img src='./Images/Banner-board-1.png' alt="" className='w-full' />
                                    </div>
                              </div>
                              <div className="w-1/5">
                                    <div className="banner-items flex flex-col">
                                          <div className='rounded-md  bg-[#E3F0FF] p-4 mx-4 mb-2'>
                                                <ul className='flex items-center pb-4'>
                                                      <li><img src='./Images/Avatar.png' alt="" /></li>
                                                      <li className='ms-2'><p className='text-md leading-[1.2] font-semibold '>Hi, user let's get stated</p></li>
                                                </ul>
                                                <button className='bg-blue-500 w-full rounded-md py-1 my-1 text-white font-[500]'>Join now</button>
                                                <button className='bg-white w-full rounded-md border py-1 my-1 text-blue-500 font-[500] border-[#DEE2E7]'>Join now</button>
                                          </div>
                                          <div className='bg-[#F38332] p-6 mx-4 text-[16px]  font-[400] rounded-lg my-2'>
                                                <a href={'./'} className='text-white'>Get US $10 off with a new supplier</a>
                                          </div>
                                          <div className='bg-[#55BDC3] p-6 mx-4 text-[16px] font-[400] rounded-lg my-2'>
                                                <a href={'./'} className='text-white'>Send quotes with supplier preferences</a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Banner