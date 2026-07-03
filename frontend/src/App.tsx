import './App.css'

import {CardCategory} from "./component/CardCategory.tsx";
import { ResourceList } from './component/resourceList/ResourceList.tsx';
import {CreateCategory} from "./component/CreateCategory.tsx";



function App() {

  return (
    <>

    <CreateCategory />
    <CardCategory />
    <ResourceList />
        
    </>

  )
}

export default App
