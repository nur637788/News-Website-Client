import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='text-black bg-white'>
      <header className='bg-gray-200'>
        <Header />
        <Navbar />
      </header>
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <footer className=''>
        <Footer />
      </footer>
    </div >
  )
}

export default App
