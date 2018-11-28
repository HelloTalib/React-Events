import React, { Component } from 'react'
import Header from './components/Header_Footer/Header';
import Featured from './components/Featured/Index'
import VenueInfo from './components/VenueInfo/Index'
import HighLights from './components/HighLights/Index'
export class App extends Component {
  render() {
    return (
      <div className =" App" >
        <Header/>
        <Featured/>
        <VenueInfo/>
        <HighLights/>
      </div>
    )
  }
}

export default App
