import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from '@mui/material';
import { BorderLinearProgress } from '../../MaterialUI/BorderLinearProgress';

const YourSelf = ({ NextBtn3, BackBtn2, ProgressCount }) => {
      return (
            <div>
                  <div>
                        <BorderLinearProgress variant="determinate" value={ProgressCount} />
                        <ul className='d-flex align-content-center align-items-center back-btn'>
                              <li><IoIosArrowBack onClick={() => BackBtn2()} className='IoIosArrowBack' /></li>
                              <li>
                                    <p className='fist'>Step 2 of 3</p>
                                    <p className='last'>Tell us about yourself</p>
                              </li>
                        </ul>
                        <div className='d-flex flex-col telus-filed'>
                              <label htmlFor="">Name</label>
                              <p>This name will appear on your profile</p>
                              <input type="text" name='name' />
                              <label htmlFor="">Date of birth</label>
                              <p>Why do we need your date of birth? Learn more.</p>
                              <input type="date" />
                              <div>
                                    <label>Gender</label>
                                    <p>We use your gender to help personalize our content recommendations and ads for you.</p>
                                    <div className='row'>
                                          <div className='radio-items'>
                                                <input type="radio" name='gender' />
                                                <label htmlFor="">Man</label>
                                          </div>
                                          <div className='radio-items'>
                                                <input type="radio" name='gender' />
                                                <label htmlFor="">Woman</label>
                                          </div>
                                          <div className='radio-items'>
                                                <input type="radio" name='gender' />
                                                <label htmlFor="">Non-binary</label>
                                          </div>
                                          <div className='radio-items'>
                                                <input type="radio" name='gender' />
                                                <label htmlFor="">Somthing else</label>
                                          </div>
                                          <div className='radio-items'>
                                                <input type="radio" name='gender' />
                                                <label htmlFor="">Prefer not to say</label>
                                          </div>
                                    </div>
                              </div>
                              <Link onClick={() => NextBtn3()}>Next</Link>
                        </div>
                  </div>
            </div>
      )
}

export default YourSelf