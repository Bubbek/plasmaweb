import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './css/App.css'

import HeadNavbar from './components/HeadNavbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="wrapper">
      <HeadNavbar />
      <Footer />
    </div>
  )
}

export default App
