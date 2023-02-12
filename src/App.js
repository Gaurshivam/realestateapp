import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Property from './components/Property/Property.js'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
    <Navbar />
    <Body />
    <Property />
    <Featured />
    <Footer />
    </div>
  )
}

export default App
