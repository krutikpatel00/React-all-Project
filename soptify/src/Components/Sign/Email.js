import { Link } from '@mui/material'
import React from 'react'



const Email = ({ NextBtn1 }) => {
      
      return (
            <div className='Email-address'>
                  <h2>Sign up to start  listening  </h2>
                  <label htmlFor="">Email address</label>
                  <input type="text" placeholder='name@domain.com' name='email' />
                  <Link onClick={() => NextBtn1()}>Next</Link>
            </div>
      )
}

export default Email