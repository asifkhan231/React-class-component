import React, { Component } from 'react'
import EventHandler from './component/eventHandler';
import EventBinding from './component/eventBinding';

 class App extends Component {
  constructor() {
    super();
    
    }
  

  render() {
    return (
      <div>
        {/* <EventHandler/> */}
        <EventBinding/>
      </div>
    )
  }
}

export default App