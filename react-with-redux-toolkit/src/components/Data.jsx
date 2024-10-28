import React from 'react'
import { useSelector } from 'react-redux'


function Data() {
    const value= useSelector(chakde=>  chakde.counter.counterVal)
  return (
    <p className="lead mb-4">Data is : { value}</p>

  )
}

export default Data