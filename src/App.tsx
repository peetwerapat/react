import './App.css'
import Greeting from './components/Greeting'
import NavbarLogin from './components/NavbarLogin'

function App() {
  return (
    <div className="App">
      <NavbarLogin />
      <Greeting name="Peet" age={23} country="Thailand" />
      <Greeting name="Dodo" age={24} country="Thailand" />
    </div>
  )
}

export default App
