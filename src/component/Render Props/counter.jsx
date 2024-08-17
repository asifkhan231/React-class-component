import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    countHanlder = () => {
        console.log("hello")
        this.setState(prev => { return { count: prev.count + 1 } })
    }


    render() {
        return (
            <div>
                { this.props.render(this.state.count,this.countHanlder)}
            </div>
        )
    }
}

export default Counter
