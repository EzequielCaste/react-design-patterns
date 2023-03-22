import { SplitScreen } from './SplitScreen'

const LeftHandComponent = () => {
  return (
    <h1 style={{backgroundColor: 'green'}}>Left</h1>
  )
}
const RightHandComponent = () => {
  return (
    <h1 style={{backgroundColor: 'orange'}}>Right</h1>
  )
}


function App() {  
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
     />   
  )
}

export default App
