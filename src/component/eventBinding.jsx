import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
      super(props)

      this.state = {
         name:"hello"
      }
      console.log(this)

      this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler = ()=>{
    //     console.log("hello")
    // }
    
    clickHandler(){
        console.log("hello")
    }
    render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {/* <button onClick={this.clickHandler}>Submit</button>// just using function without arrow function will result a error because in this condition this refer to nothing . to fix we just use bind method and bind constructor this to this function  */}
        {/* <button onClick={this.clickHandler.bind(this)}>Submit</button>  1* */}
        {/* <button onClick={()=>this.clickHandler()}>Submit</button>  2 */}
        <button onClick={this.clickHandler}>Submit</button> 
      </div>
    )
  }
}

export default EventBinding
