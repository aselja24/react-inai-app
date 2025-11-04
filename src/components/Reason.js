import React from 'react'
// import { ways } from '..data'

export default function Reason(props) {
  return (
    <div>
      {/* <img src={icon_1} alt="icon_1" className="icon_1"></img> */}
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
