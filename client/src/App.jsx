import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services'
import Transactions from './components/Transactions'

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Home/>
      </div>
      <Services/>
      <Transactions/>
    </div>
  )
}

export default App
