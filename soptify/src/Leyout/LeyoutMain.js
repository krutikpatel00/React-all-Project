import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MainHeader from '../Components/MainHeader/MainHeader'
import StikeyHeader from '../Components/StikeyHeader/StikeyHeader'
import { SpotifyContext } from '../Context/SpotifyProvider'

const LeyoutMain = () => {
      return (
            <>
                  <MainHeader />
                  <StikeyHeader />
                  <Outlet />
            </>
      )
}

export default LeyoutMain