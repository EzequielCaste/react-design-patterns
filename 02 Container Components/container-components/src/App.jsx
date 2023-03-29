import { UserLoader } from "./UserLoader"
import { UserInfo } from "./UserInfo"
import { ResourceLoader } from "./ResourceLoader"
import { ProductInfo } from "./ProductInfo"
import { DataSource } from "./DataSource"
import axios from "axios"

const getServerData = url => async () => {
  const response = await axios.get(url)
  return response.data
}

function App() {

  return (
    <>
      <DataSource getDataFunc={getServerData('/api/users/123')} resourceName='user'>
        <UserInfo />
      </DataSource> 
    </>
  )
}

export default App
