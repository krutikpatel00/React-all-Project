import React from 'react'
import useCounter from '../Hook/useCounter'

const Counter = () => {

      const { count, Icremanet, Dcremanet } = useCounter(2)

      return (
            <div>

                  <center>
                        <h1>Counter Hook use</h1>
                        <h2>{count}</h2>

                        <button onClick={() => Icremanet(2)}>inc</button>

                        <button onClick={() => Dcremanet(5)}>dec</button>
                  </center>
            </div>

      )
}

export default Counter