import React from 'react'
import './Electronics.css'
const electronicsData = [
      {
            outdoorName: 'Smart watches',
            from: 'From USD 19',
            Img: './Images/1.png'
      },
      {
            outdoorName: 'Cameras',
            from: 'From USD 19',
            Img: './Images/2.png'
      },
      {
            outdoorName: 'Headphones',
            from: 'From USD 19',
            Img: './Images/5.png'
      },
      {
            outdoorName: 'Smart watches',
            from: 'From USD 19',
            Img: './Images/3.png'
      },
      {
            outdoorName: 'Gaming set',
            from: 'From USD 19',
            Img: './Images/6.png'
      },
      {
            outdoorName: 'Laptops & PC',
            from: 'From USD 19',
            Img: './Images/8.png'
      },
      {
            outdoorName: 'Smartphones',
            from: 'From USD 19',
            Img: './Images/7.png'
      },
      {
            outdoorName: 'Electric kattle',
            from: 'From USD 19',
            Img: './Images/4.png'
      },
]


const Electronics = () => {
      return (
            <section className='py-2 font-[Inter] bg-[#F7FAFC]'>
                  <div className="container mx-auto px-4 ">
                        <div className="flex">
                              <div className="w-1/5">
                                    <div className='bg-electronics-img  h-full p-4'>
                                          <h4 className='text-2xl font-semibold pe-8 leading-[1.1] pb-4'>Consumer electronics and gadgets</h4>
                                          <a href={'javscript:void(0)'} className='py-2 px-6 text-md rounded-md inline-block bg-white text-black font-[500]'>Source now</a>
                                    </div>
                              </div>
                              <div className="w-4/5">
                                    <div className='flex flex-wrap'>
                                          {
                                                electronicsData.map((item, i) => {
                                                      return (
                                                            <div className='w-1/4' key={i}>
                                                                  <div className=' bg-white px-4 py-6 border relative'>
                                                                        <h6 className='text-xl  font-[400]'>{item.outdoorName}</h6>
                                                                        <p className='text-md text-gray-400 pe-48 pt-2'>{item.from}</p>
                                                                        <img src={item.Img} alt={item.Img} title={item.Img} className='absolute bottom-1 right-1' />
                                                                  </div>
                                                            </div>
                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Electronics