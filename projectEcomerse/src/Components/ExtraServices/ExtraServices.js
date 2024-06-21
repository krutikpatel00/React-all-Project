import React from 'react'

const ExtraServices = () => {

      const extraServices = [
            {
                  Img: './Images/services1.png',
                  Icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className='inline-block'>
                        <path d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z" fill="#1C1C1C" />
                  </svg>,
                  Detile: 'Source from Industry Hubs'
            },
            {
                  Img: './Images/services2.png',
                  Icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className='inline-block'>
                        <path d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z" fill="#1C1C1C" />
                        <path d="M15 12H9V14H15V12Z" fill="#1C1C1C" />
                  </svg>,
                  Detile: 'Customize Your Products'
            },
            {
                  Img: './Images/services3.png',
                  Icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className='inline-block'>
                        <path d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z" fill="#1C1C1C" />
                  </svg>,
                  Detile: 'Fast, reliable shipping by ocean or air'
            },
            {
                  Img: './Images/services4.png',
                  Icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className='inline-block'>
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="#1C1C1C" />
                  </svg>,
                  Detile: 'Product monitoring and inspection'
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
                                    extraServices.map((item) => {
                                          return (
                                                <div className="w-1/4">
                                                      <div className='border mx-4'>
                                                            <div className='relative'>
                                                                  <img src={item.Img} alt={item.Img} className='w-full' />
                                                                  <a href='javscript:void(0)' className='inline-block rounded-full h-14 w-14 leading-[56px] text-center  bg-[#D1E7FF] absolute -bottom-7 right-4'>
                                                                        {item.Icon}
                                                                  </a>
                                                            </div>
                                                            <p className='text-2xl font-semibold text-[#1C1C1C]  leading-[1.2] py-6 ps-6 pe-20'>{item.Detile}</p>
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

export default ExtraServices