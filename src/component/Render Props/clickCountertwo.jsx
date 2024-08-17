import React, { Component } from 'react'

export class ClickCountertwo extends Component {
    render() {
        const {count,countHandler} = this.props
        return (
          <button onClick={countHandler}> clicked {count} times</button>
        )
      }
}

export default ClickCountertwo
