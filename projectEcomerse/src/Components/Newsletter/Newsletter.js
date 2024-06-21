import React from 'react'

const Newsletter = () => {
      return (
            <section className='py-14 bg-[#EFF2F4]'>
                  <div className='container mx-auto px-4'>
                        <div className='text-center'>
                              <h2 className='font-bold text-2xl pb-2'>Subscribe on our newsletter</h2>
                              <p className='text-gray-400 leading-[1]'>Get daily news on upcoming offers from many suppliers all over the world</p>
                              <div className='mt-6'>
                                    <input type="text" placeholder='Email' className='border py-2 w-72 px-4 rounded-md' />
                                    <button className='py-2 bg-blue-600 ms-2 px-6 text-white font-semibold rounded-md'>Subscribe</button>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Newsletter