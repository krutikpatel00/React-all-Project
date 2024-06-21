import React from 'react'
import Gradfather from './Gradfather'

const Father = ({ cf, cg }) => {
      return (
            <>
                  <h2>Father Componets</h2>
                  <ol>
                        <li>{cf.Name}</li>
                        <li>{cf.age}</li>
                  </ol>
                  <Gradfather fg={cg} />
            </>
      )
}

export default Father