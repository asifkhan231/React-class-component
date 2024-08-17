import React, { Component } from 'react'
import WithCounter from './withCounter';

export class ClickCounter extends Component {
  render() {
    const {count,countHanlder} = this.props
    return (
      <button onClick={countHanlder}> clicked {this.props.count} times</button>
    )
  }
}

export default WithCounter(ClickCounter)
