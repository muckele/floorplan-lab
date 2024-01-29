import './App.css'
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import Bath from './Bath'
import LivingRoom from './LivingRoom'

function App() {
  return (
    <div className='FloorPlan'>
      <span className='upper'>
        <span className='Upper-Left'>
          <Bedroom bedNum = {1} />      
          <Bath size= "Full" />
        </span>
        <LivingRoom />
        <Kitchen kitchenStuffs = 
          {["Oven", "Sink"]}
        />
      </span>
      <span className='bottom'>
        <Bedroom bedNum = {2} />
        <Bath size= "Half" />
        <Bedroom bedNum = {3} />
      </span>
    </div>
  )
}

export default App