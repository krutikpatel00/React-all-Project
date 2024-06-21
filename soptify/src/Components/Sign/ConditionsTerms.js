import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { BorderLinearProgress } from '../../MaterialUI/BorderLinearProgress';

const ConditionsTerms = ({ BackBtn3, ProgressCount }) => {
      return (
            <div>
                  <BorderLinearProgress variant="determinate" value={ProgressCount} />
                  <ul className='d-flex align-content-center align-items-center back-btn'>
                        <li><IoIosArrowBack onClick={() => BackBtn3()} className='IoIosArrowBack' /></li>
                        <li>
                              <p className='fist'>Step 3 of 4</p>
                              <p className='last'>Terms & Conditions</p>
                        </li>
                  </ul>
                  <div className='d-flex flex-col terms-items'>
                        <ul className='d-flex '>
                              <li><input type="checkbox" /></li>
                              <li>
                                    <p>I would prefer not to receive marketing messages from Spotify</p>
                              </li>
                        </ul>
                        <ul className='d-flex'>
                              <li><input type="checkbox" /></li>
                              <li>
                                    <p>Share my registration data with Spotify's content providers for marketing purposes.</p>
                              </li>
                        </ul>
                        <p>By clicking on sign-up, you agree to Spotify's <a href="/">Terms and Conditions of Use.</a></p>
                        <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's <a href="/">Privacy Policy.</a></p>
                        <button>Sign Up</button>
                  </div>
            </div>

      )
}

export default ConditionsTerms