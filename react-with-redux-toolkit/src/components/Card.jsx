import React from 'react'

function Card({children}) {
  return (
    <div className="card" style={{width: "100%"}}>
    <div className="card-body">
     {children}
    </div>
  </div>
  )
}

export default Card