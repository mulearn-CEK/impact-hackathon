import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Context from './components/Context'
import Themes from './components/Themes'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Venue from './components/Venue'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function App() {
  return (
    <div className="bg-background-dark text-white overflow-x-hidden transition-colors duration-300">
      <Header />
      <Hero />
      <Context />
      <Themes />
      <Schedule />
      <Prizes />
      <Venue />
      <Footer />
      <FloatingButton />
    </div>
  )
}

export default App
