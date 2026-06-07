import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

const App = () => {
  const [darkmode, setDarkmode] = useState(false)
  const[activeFilter, setActiveFilter] = useState('All');
  return (
    <div className={darkmode ? 'dark' : ''}>
      <div className='min-h-screen w-full bg-[hsl(217,61%,90%)] dark:bg-[hsl(227,75%,14%)] p-5 py-6 md:px-25 md:py-10'>
        <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
        <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <Cards activeFilter={activeFilter}/>
      </div>
    </div>

  )
}

export default App
