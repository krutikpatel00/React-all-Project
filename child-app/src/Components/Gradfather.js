import React from 'react'

const Gradfather = ({ fg }) => {
      return (
            <div>
                  <h2>Gradfather Componets</h2>
                  <ol>
                        <li>{fg.Name}</li>
                        <li>{fg.age}</li>
                  </ol>
            </div>
      )     
}

export default Gradfather