import React from 'react'
import useOnlilne from '../Hook/useOnlilne'

const Online = () => {

      const online = useOnlilne()
      return (
            <center>
                  <h2>
                        a : {online ? 'online' : 'offline'}
                  </h2>
            </center>
      )
}

export default Online