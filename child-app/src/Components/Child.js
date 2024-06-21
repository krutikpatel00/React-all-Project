import React from 'react'
import Father from './Father'

const Child = ({ cc, ff, gg }) => {
      return (
            <div>
                  <h2>Child Componets </h2>
                  <ol>
                        <li>{cc.Name}</li>
                        <li>{cc.age}</li>
                  </ol>
                  <Father cf={ff} cg={gg} />
            </div>

      )
}

export default Child