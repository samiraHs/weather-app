
import './App.css'
import { CityProvider } from './CityContext'
import Form from './components/Form'
import Leaflet from './components/Leaflet'
import Weather from './components/Weather'
function App() {
  

  return (
    <CityProvider>
      <div className="h-screen bg-cover bg-center opacity-80"style={{backgroundImage:"url(https://t4.ftcdn.net/jpg/03/48/58/83/360_F_348588333_yEOn7lnklwAcNVSWf3iHUpFqmDgyOvCD.jpg)"}}>
        <Form/>
        <Weather/>
        <Leaflet/>
      </div>
    </CityProvider>
  )
}

export default App
