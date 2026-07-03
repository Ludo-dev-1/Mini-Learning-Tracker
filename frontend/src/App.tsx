import "./App.css";

import { ResourceListSelected } from "./component/ResourceListSelected.tsx";
import { CardCategory } from "./component/CardCategory.tsx";
import { ResourceList } from "./component/resourceList/ResourceList.tsx";
import { CreateCategory } from "./component/CreateCategory.tsx";
import { CreateResourceForm } from "./component/createResource/CreateResource.tsx";

function App() {
  return (
    <>
      <ResourceListSelected />
      <CreateCategory />
      <CardCategory />
      <ResourceList />
      <CreateResourceForm />
    </>
  );
}

export default App;
