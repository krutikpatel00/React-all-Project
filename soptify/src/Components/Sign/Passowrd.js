import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import { Link } from '@mui/material';
import { BorderLinearProgress } from '../../MaterialUI/BorderLinearProgress';

const Passowrd = ({ NextBtn2, BackBtn1, ProgressCount }) => {
      return (
            <div>
                  <div>
                        <BorderLinearProgress variant="determinate" value={ProgressCount} />

                        <ul className='d-flex align-content-center align-items-center back-btn'>
                              <li><IoIosArrowBack onClick={() => BackBtn1()} className='IoIosArrowBack' /></li>
                              <li>
                                    <p className='fist'>Step 1 of 3</p>
                                    <p className='last'>Create a password</p>
                              </li>
                        </ul>
                        <div className='d-flex flex-col passowrd-filed'>
                              <label htmlFor="">Password</label>
                              <input type="text" placeholder='Passoword' name='password' />
                              <p>Your password must contain at least
                              </p>
                              <ul>
                                    <li><IoIosRadioButtonOff className='IoIosRadioButtonOff' />1 letter</li>
                                    <li><IoIosRadioButtonOff className='IoIosRadioButtonOff' />1 number or special character (example: # ? ! &)</li>
                                    <li><IoIosRadioButtonOff className='IoIosRadioButtonOff' />10 characters</li>
                              </ul>
                              <Link onClick={() => NextBtn2()}>Next</Link>
                        </div>
                  </div>

            </div>
      )
}

export default Passowrd