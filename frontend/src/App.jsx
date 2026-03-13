import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Teams from './pages/Teams'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    // Update the basename to match your new repo name
    <Router basename="/drukoptix-ai">
      {/* Add a subtle overlay to enhance glass effect */}
      <div className="fixed inset-0 bg-black/20 pointer-events-none z-0"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Navigation />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App