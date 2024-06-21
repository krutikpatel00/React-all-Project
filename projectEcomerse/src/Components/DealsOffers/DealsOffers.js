import React, { useState, useEffect } from 'react';


const DealsOffers = () => {
      const [days, setDays] = useState(4);
      const [hours, setHours] = useState(13);
      const [minutes, setMinutes] = useState(36);
      const [seconds, setSeconds] = useState(48);

      useEffect(() => {
            const countdownInterval = setInterval(() => {

                  if (seconds > 0) {
                        setSeconds(seconds - 1);
                  } else {
                        if (minutes > 0) {
                              setMinutes(minutes - 1);
                              setSeconds(59);
                        } else {
                              if (hours > 0) {
                                    setHours(hours - 1);
                                    setMinutes(59);
                                    setSeconds(59);
                              } else {
                                    if (days > 0) {
                                          setDays(days - 1);
                                          setHours(23);
                                          setMinutes(59);
                                          setSeconds(59);
                                    } else {

                                          clearInterval(countdownInterval);
                                    }
                              }
                        }
                  }
            }, 1000);


            return () => clearInterval(countdownInterval);
      }, [days, hours, minutes, seconds]);



      // Date




      return (
            <section className='font-[Inter] bg-[#F7FAFC] py-8'>
                  <div className="container mx-auto px-4">
                        <div className="flex bg-white border border-[#DEE2E7] rounded-lg py-1">
                              <div className="w-1/5">
                                    <div className='p-4'>
                                          <h6 className='text-2xl font-[600]'>Deals and offers</h6>
                                          <p className='pb-[5px]'>Hygiene equipments</p>
                                          <ul className='flex items-center'>
                                                <li className='text-center mx-1 rounded-md bg-[#606060] text-white w-14 py-2'>
                                                      <h4>{days}</h4>
                                                      <p>Days</p>
                                                </li>
                                                <li className='text-center mx-1 rounded-md bg-[#606060] text-white w-14 py-2'>
                                                      <h4>{hours}</h4>
                                                      <p>Hour</p>
                                                </li>
                                                <li className='text-center mx-1 rounded-md bg-[#606060] text-white w-14 py-2'>
                                                      <h4>{minutes}</h4>
                                                      <p>Min</p>
                                                </li>
                                                <li className='text-center mx-1 rounded-md bg-[#606060] text-white w-14 py-2'>
                                                      <h4>{seconds}</h4>
                                                      <p>Sec</p>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="w-4/5">
                                    <div className='flex'>
                                          <div className='w-1/5'>
                                                <div className='text-center border-[#DEE2E7] border-s border-e py-4'>
                                                      <img src='../Images/img-2.png' alt="" className='block w-full px-8 pb-4' />
                                                      <h4 className='text-lg py-2'>Smart watches</h4>
                                                      <p className='text-md text-red-500 py-1 px-5 rounded-full inline-block bg-[#FFE3E3]'>25%</p>
                                                </div>
                                          </div>
                                          <div className='w-1/5'>
                                                <div className='text-center border-[#DEE2E7] border-s border-e py-4'>
                                                      <img src='../Images/img-2.png' alt="" className='block w-full px-8 pb-4' />
                                                      <h4 className='text-lg py-2'>Smart watches</h4>
                                                      <p className='text-md text-red-500 py-1 px-5 rounded-full inline-block bg-[#FFE3E3]'>25%</p>
                                                </div>
                                          </div>
                                          <div className='w-1/5'>
                                                <div className='text-center border-[#DEE2E7] border-s border-e py-4'>
                                                      <img src='../Images/img-2.png' alt="" className='block w-full px-8 pb-4' />
                                                      <h4 className='text-lg py-2'>Smart watches</h4>
                                                      <p className='text-md text-red-500 py-1 px-5 rounded-full inline-block bg-[#FFE3E3]'>25%</p>
                                                </div>
                                          </div>
                                          <div className='w-1/5'>
                                                <div className='text-center border-[#DEE2E7] border-s border-e py-4'>
                                                      <img src='../Images/img-2.png' alt="" className='block w-full px-8 pb-4' />
                                                      <h4 className='text-lg py-2'>Smart watches</h4>
                                                      <p className='text-md text-red-500 py-1 px-5 rounded-full inline-block bg-[#FFE3E3]'>25%</p>
                                                </div>
                                          </div>
                                          <div className='w-1/5'>
                                                <div className='text-center border-[#DEE2E7] border-s border-e py-4'>
                                                      <img src='../Images/img-2.png' alt="" className='block w-full px-8 pb-4' />
                                                      <h4 className='text-lg py-2'>Smart watches</h4>
                                                      <p className='text-md text-red-500 py-1 px-5 rounded-full inline-block bg-[#FFE3E3]'>25%</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default DealsOffers