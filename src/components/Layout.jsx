import { useEffect } from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import BottomBar from './BottomBar'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <BottomBar />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
