import './App.css'
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import Bath from './Bath'
import LivingRoom from './LivingRoom'

function App() {
  return (
    <div>
      <Bedroom numBed={1} />
      <Bedroom numBed={2} />
      <Bedroom numBed={3} />
      <Kitchen />
      <Bath size = "Full" />
      <Bath size = "Half" />
      <LivingRoom />
    </div>
  )
}

export default App