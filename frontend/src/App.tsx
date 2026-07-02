import './App.css'
import {CardCategory} from "./component/CardCategory.tsx";
import {useState} from "react";

function App() {

  // state pour stocker les articles
  const [resources, setResource] = useState([]);

  // state pour stocker le type sélectionné
  const [selectedType, setSelectedType] = useState("All");

  const filteredResourceByType =
      selectedType === "All"
          ? resources
          : resources.filter((resources) => resource.type.some((typ) => typ.name === selectedType));


  return (
    <>
      {/* Sélecteur de type */}
      <div>
        <select onChange={(e) => setSelectedType(e.target.value)}>
          <option value="All">Type</option>

        </select>

      </div>



    <CardCategory />
    </>

  )
}

export default App
