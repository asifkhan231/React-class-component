import React, { Component } from 'react'

export class EventHandler extends Component {
    constructor(props) {
      super(props)

      this.state = {
         name:"hello"
      }
      console.log(this)
    }

    clickHandler(){
        console.log("hello")
    }
    
    render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.clickHandler()}>Submit</button>
      </div>
    )
  }
}

export default EventHandler
