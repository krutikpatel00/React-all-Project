import React from 'react'
import './Card.css'


const dataCard = [
      {
            name: 'Nike Shoes',
            size: [7, 8, 9, 10],
            image: require('../Assets/Images/running_shoes1.png'),
            color: ['#1bbfe9', '#1be93a', '#1b4fe9']
      },
      {
            name: 'Nike Shoes',
            size: [7, 8, 9, 10],
            image: require('../Assets/Images/running_shoes_2.png'),
            color: ['#1bbfe9', '#1be93a', '#1b4fe9']
      },
      {
            name: 'Nike Shoes',
            size: [7, 8, 9, 10],
            image: require('../Assets/Images/running_shoes_4.png'),
            color: ['#1bbfe9', '#1be93a', '#1b4fe9']
      }
]

const Card = () => {
      return (
            <section>
                  <div className='container'>
                        <div className="row">
                              {
                                    dataCard.map((item) => {
                                          return (
                                                <div className="w-4">
                                                      <div className="card-items">
                                                            <div className='card-img'>
                                                                  <img src={item.image} alt="" />
                                                            </div>
                                                            <div className='card-content'>
                                                                  <h2>{item.name}</h2>
                                                                  <div class="size">
                                                                        <h3>Size :</h3>
                                                                        {
                                                                              item.size.map((size) => {
                                                                                    return (
                                                                                          <button>{size}</button>
                                                                                    )
                                                                              })
                                                                        }
                                                                  </div>
                                                                  <div class="color">

                                                                        <h3>Color :</h3>
                                                                       
                                                                        {
                                                                              item.color.map((colo) => {
                                                                                    return (
                                                                                          <span style={{ backgroundColor: colo }}>
                                                                                          </span>
                                                                                    )
                                                                              })
                                                                        }
                                                                  </div>
                                                                  <a href="javscript:void(0)" className='btn-buy'>Buy Now</a>
                                                            </div>
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

export default Card