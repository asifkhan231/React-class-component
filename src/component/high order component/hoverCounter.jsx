import React, { Component } from 'react'
import WithCounter from './withCounter'

export class HoverCounter extends Component {
  render() {
    const {count, countHanlder} = this.props
    return <h3 onMouseOver={countHanlder}> hovered {count} time </h3>
  }
}

export default WithCounter(HoverCounter)
