import { printProps } from "./printProps"
import {UserInfo} from './UserInfo'

const UserInfoWrapped = printProps(UserInfo)

function App() {
  return (
    <UserInfoWrapped 
      a={12}
      b="Eze"
      c={{name: "Joe"}}
    />
  )
}

export default App
