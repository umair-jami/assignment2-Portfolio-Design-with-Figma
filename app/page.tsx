import React from 'react'
import Navbar from './components/navbar/page'
import About from './components/about/page'
import Brands from './components/brands/page'
import Fashion from './components/fashion/page'
import Offers from './components/Offers/page'
import FAVOURITE from './components/favourite/page'
import App from './components/app/page'
import Contact from './components/contact/page'
import Footer from './components/footer/page'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Brands/>
      <Fashion/>
      <Offers/>
      <FAVOURITE/>
      <App/>
      <Contact/>
      <Footer/>
    </div>
  )
}
