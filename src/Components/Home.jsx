import React from 'react'
import Header from './Header'
import Banner from './Banner'
import TopPicks from './TopPicks'
import Carousal from './Carousal'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <TopPicks/>
      <Carousal/>
      <Footer/>
    </div>
  )
}
