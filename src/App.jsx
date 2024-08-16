import React, { Component } from 'react'
import EventBinding from './component/eventHandler/eventBinding';
import EventHandler from './component/eventHandler/eventHandler';
import Hero from './component/errorBoundary/hero';
import ErrorBoundary from './component/errorBoundary/errorBoundary';



class App extends Component {
  constructor() {
    super();

  }


  render() {
    return (
      <div>
        {/* <EventHandler/> */}
        <EventBinding />


        <ErrorBoundary>
          <Hero name="Suparman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="joker" />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App