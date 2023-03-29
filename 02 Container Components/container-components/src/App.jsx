import { UserLoader } from "./UserLoader"
import { UserInfo } from "./UserInfo"
import { ResourceLoader } from "./ResourceLoader"
import { ProductInfo } from "./ProductInfo"
function App() {

  return (
    <>
      <ResourceLoader resourceUrl='/api/users/234' resourceName='user'>
        <UserInfo />
      </ResourceLoader> 
      <ResourceLoader resourceUrl='/api/products/1234' resourceName='product'>
        <ProductInfo />
      </ResourceLoader>  
    </>
  )
}

export default App
