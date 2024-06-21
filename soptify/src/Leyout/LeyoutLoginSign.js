import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
const LeyoutLoginSign = () => {
      return (
            <div>
                  <Header></Header>
                  <Outlet />
                 
            </div>
      )
}

export default LeyoutLoginSign