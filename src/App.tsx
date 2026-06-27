import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pastor from './components/Pastor'
import Schedule from './components/Schedule'
import Ministries from './components/Ministries'
import Communities from './components/Communities'
import Location from './components/Location'
import Contact from './components/Contact'
import Donations from './components/Donations'
import Footer from './components/Footer'
import FloatingWhats from './components/FloatingWhats'

export default function App(){
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Pastor/>
      <Schedule/>
      <Ministries/>
      <Communities/>
      <Location/>
      <Contact/>
      <Donations/>
      <Footer/>
      <FloatingWhats/>
    </div>
  )
}
