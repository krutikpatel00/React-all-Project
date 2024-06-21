import React from 'react'

const Suppliers = () => {

      const suppliers = [
            {
                  Img: './Images/AE.png',
                  Country: 'Arabic Emirates',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/AS.png',
                  Country: 'Australia',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/US.png',
                  Country: 'United States',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/RU.png',
                  Country: 'Russia',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/IT.png',
                  Country: 'Italy',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/DK.png',
                  Country: 'Denmark',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/FR.png',
                  Country: 'France',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/AE.png',
                  Country: 'Arabic Emirates',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/CN.png',
                  Country: 'China',
                  detail: 'shopname.ae'
            },
            {
                  Img: './Images/GB.png',
                  Country: 'Great Britain',
                  detail: 'shopname.ae'
            },
      ]

      return (
            <section className='my-8'>
                  <div className='container mx-auto px-4'>
                        <div className='pb-4 px-4'>
                              <h2 className='text-4xl font-semibold'>Our extra services</h2>
                        </div>
                        <div className='flex flex-wrap'>
                              {
                                    suppliers.map((item) => {
                                          return (
                                                <div className="w-1/5">
                                                      <div className='my-2 mx-4'>
                                                            <ul className='flex items-center'>
                                                                  <li className='pe-4'>
                                                                        <img src={item.Img} alt="" />
                                                                  </li>
                                                                  <li>
                                                                        <h4 className='font-semibold'>{item.Country}</h4>
                                                                        <p className='text-gray-400 leading-[1]'>{item.detail}</p>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
            </section>
      )
}

export default Suppliers