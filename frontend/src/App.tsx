import './App.css'
import {ResourceListSelected} from "./component/ResourceListSelected.tsx";
import {CreateCategory} from "./component/CreateCategory.tsx";
import {CardCategory} from "./component/CardCategory.tsx";


function App() {

  return (
    <>
        <ResourceListSelected />
        <CreateCategory/>
        <CardCategory />
    </>

  )
}

export default App
