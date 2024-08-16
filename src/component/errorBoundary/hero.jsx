import React from 'react'

export default function Hero(props) {
    if(props.name === "joker"){
        throw new Error("joker is not a hero");
        
    }
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
