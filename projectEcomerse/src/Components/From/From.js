import React from 'react'
import './From.css'
const From = () => {
      return (
            <section>
                  <div className="container mx-auto px-4 ">
                        <div className='flex banner-from rounded-xl'>
                              <div className="w-1/2">
                                    <div className='p-8'>
                                          <h2 className='text-white text-[50px] leading-[1.1] pe-32 font-semibold'>An easy way to send requests to all suppliers</h2>
                                          <p className='text-white text-2xl mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                              </div>
                              <div className="w-1/2">
                                    <div className='p-8'>
                                          <div className='rounded-lg p-4 bg-white'>
                                                <h4 className='text-3xl mb-6 font-[600]'>Send quote to suppliers</h4>
                                                <input type="text" className='border my-4 rounded-md block w-full p-3 border-gray-300' placeholder='What item you need?' />
                                                <textarea name="" className='border my-4 block w-full p-3 rounded-md border-gray-300' placeholder='Type more details' id="" cols="30" rows="5"></textarea>
                                                <div className='my-4'>
                                                      <input type="text" className='border p-3 rounded-md border-gray-300' placeholder='Quantity' />
                                                      <select name="" id="" className='border p-3 ms-8 rounded-md  border-gray-300'>
                                                            <option value="">Pcs</option>
                                                      </select>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default From