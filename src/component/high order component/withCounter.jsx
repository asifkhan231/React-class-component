import React, { Component } from 'react'

const WithCounter = OriginalComponent => {
    class NewComponent extends Component {
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
            return <OriginalComponent count={this.state.count} countHanlder={this.countHanlder} />
        }
    }

    return NewComponent
}

export default WithCounter