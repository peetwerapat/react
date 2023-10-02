import './App.css'
import Greeting from './components/Greeting'
import NavbarLogin from './components/NavbarLogin'

function App() {
  return (
    <div className="App">
      <NavbarLogin />
      <Greeting name="Peet" age={23} country="Thailand" isLoggedIn={true} />
      <Greeting name="Dodo" age={24} country="Thailand" isLoggedIn={false} />
    </div>
  )
}

export default App
