import React, { useState } from 'react'
import './Sign.css'
import Email from './Email';
import Passowrd from './Passowrd';
import YourSelf from './YourSelf';
import ConditionsTerms from './ConditionsTerms';

const Sign = () => {
  const [ProgressCount, setProgressCounts] = useState(0)

  const NextBtn1 = () => {
    setProgressCounts(35);
  }

  const NextBtn2 = () => {
    setProgressCounts(75);
  }

  const NextBtn3 = () => {
    setProgressCounts(100);
  }
  const BackBtn1 = () => {
    setProgressCounts(0);
  }

  const BackBtn2 = () => {
    setProgressCounts(35);
  }

  const BackBtn3 = () => {
    setProgressCounts(75);
  }

  return (
    <div className='sign-inner'>
      <div className='sign-items'>
        <form>
          {ProgressCount === 0 && <Email NextBtn1={NextBtn1} />}
          {ProgressCount === 35 && <Passowrd NextBtn2={NextBtn2} BackBtn1={BackBtn1} ProgressCount={ProgressCount} />}
          {ProgressCount === 75 && <YourSelf NextBtn3={NextBtn3} BackBtn2={BackBtn2} ProgressCount={ProgressCount} />}
          {ProgressCount === 100 && <ConditionsTerms BackBtn3={BackBtn3} ProgressCount={ProgressCount} />}
        </form>
      </div>
    </div>
  )
}

export default Sign