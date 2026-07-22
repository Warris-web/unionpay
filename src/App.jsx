import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
