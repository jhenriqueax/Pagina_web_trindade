import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pastor from './components/Pastor'
import Schedule from './components/Schedule'
import Ministries from './components/Ministries'
import Communities from './components/Communities'
import News from './components/News'
import Agenda from './components/Agenda'
import Location from './components/Location'
import Contact from './components/Contact'
import Dizimo from './components/Dizimo'
import Donations from './components/Donations'
import Footer from './components/Footer'
import FloatingWhats from './components/FloatingWhats'

export default function App(){
  return (
    <div className="text-slate-800">
      <Navbar/>
      <Hero/>
      <About/>
      <Pastor/>
      <Schedule/>
      <Ministries/>
      <Communities/>
      <News/>
      <Agenda/>
      <Location/>
      <Contact/>
      <Dizimo/>
      <Donations/>
      <Footer/>
      <FloatingWhats/>
    </div>
  )
}
