import './App.css'

import {ResourceListSelected} from "./component/ResourceListSelected.tsx";
import {CardCategory} from "./component/CardCategory.tsx";
import { ResourceList } from './component/resourceList/ResourceList.tsx';
import {CreateCategory} from "./component/CreateCategory.tsx";
import { ResourceDetails } from './component/resourceDetails/ResourceDetails.tsx';



function App() {

  return (
    <>

    <ResourceListSelected />
    <CreateCategory />
    <CardCategory />
    <ResourceList />
    <ResourceDetails id={1}/>
    </>

  )
}

export default App
