import React from 'react'
import { useSelector } from 'react-redux'

function Data() {
    const counter= useSelector(state=> state.counter )
    const privacy= useSelector(state=> state.privacy )
  return (
    <p className="lead mb-4">Data is : {privacy === true ? '!!!!!' : counter } </p>

  )
}

export default Data