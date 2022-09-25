import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {action,originals} from './Urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost  url = {originals} title= 'Netflix Originals'/>
      <Rowpost url = {action} title= 'Action' isSmall/>
    </div>
  )
}

export default App