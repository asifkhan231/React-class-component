import React, { Component } from 'react'
import EventBinding from './component/eventHandler/eventBinding';
import EventHandler from './component/eventHandler/eventHandler';
import Hero from './component/errorBoundary/hero';
import ErrorBoundary from './component/errorBoundary/errorBoundary';
import WithCounter from './component/high order component/withCounter';
import HoverCounter from './component/high order component/hoverCounter';
import ClickCounter from './component/high order component/clickCounter';
import Counter from './component/Render Props/counter';
import ClickCountertwo from './component/Render Props/clickCountertwo';



class App extends Component {
  constructor() {
    super();

  }


  render() {
    return (
      <div>
        {/* <EventHandler/> */}
        {/* <EventBinding />

//------------------Error boundary--------------------------------------
        <ErrorBoundary>
          <Hero name="Suparman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="joker" />
        </ErrorBoundary> */}

        {/* //------------------Higher order component-------------------------------------- */}
        {/* <HoverCounter />
        <ClickCounter/> */}


        {/* ------------------Render props-------------------------------------- */}

        {/*<Counter render={(count, countHandler) => (
          <ClickCountertwo count={count} countHandler={countHandler} />
        )
        } />

        <Counter render={(count, countHandler) => (
          <HoverCounter count={count} countHandler={countHandler} />
        )
        } />*/}
      </div>
    )
  }
}

export default App
