import "./App.css";
import './App.css'

import {Link, Route, Routes} from "react-router";

import {CreateCategory} from "./component/CreateCategory.tsx";
import {CardCategory} from "./component/CardCategory.tsx";

import { ResourceList } from './component/resourceList/ResourceList.tsx';
import { ResourceListSelected } from "./component/ResourceListSelected.tsx";
import { ResourceList } from "./component/resourceList/ResourceList.tsx";
import { CreateResourceForm } from "./component/createResource/CreateResource.tsx";
import { ResourceDetails } from './component/resourceDetails/ResourceDetails.tsx';

function App() {
  return (
      <>
        <header className="navbar">
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/categories/new">Créer une catégorie</Link></li>
              <li><Link to="/categories">Toutes les catégories</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<ResourceList />} />
            <Route path="/categories/new" element={<CreateCategory />} />
            <Route path="/categories" element={<CardCategory />} />
            <Route path="/resources/:id" element={<ResourceDetails />} />
          </Routes>
        </main>
      </>
  )
}

export default App;
