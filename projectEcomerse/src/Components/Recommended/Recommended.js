import React from 'react'

const Recommended = () => {

      const recommendedData = [
            {
                  Img: './Images/items1.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items2.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items3.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items4.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items5.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items6.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items7.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items8.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items9.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },
            {
                  Img: './Images/items10.png',
                  Price: 10.30,
                  Name: 'T-shirts with multiple colors, for men'
            },

      ]
      return (
            <section className='my-8'>
                  <div className="container mx-auto px-4">
                        <div className='pb-4 px-4'>
                              <h2 className='text-4xl font-semibold'>Recommended items</h2>
                        </div>
                        <div className='flex flex-wrap'>
                              {
                                    recommendedData.map((item) => {
                                          return (
                                                <div className="w-1/5">
                                                      <div className='p-4 m-3 rounded-lg border border-gray-300'>
                                                            <img src={item.Img} alt={item.Img} className='block w-48 mx-auto object-cover h-56' />
                                                            <h6 className='text-2xl mt-4 font-semibold py-3'>{item.Price}</h6>
                                                            <p className='text-gray-400 leading-[1] text-xl'>{item.Name}</p>
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

export default Recommended