import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex '>
     <Outlet/>      
    </div>
  )
}

export default App


// <div className='w-screen h-screen bg-[#1F1E24] flex max-w-full overflow-x-hidden'>