import { useForm, type SubmitHandler } from "react-hook-form";
import {
  ResourceStatus,
  ResourceType,
  type Resource,
} from "../../models/Resource";
import { postResource } from "../../services/ResourceService";
import { getCategories, type Category } from "../../services/CategoryService";
import { useEffect, useState } from "react";

import '../../style/CreateResource.css'

export function CreateResourceForm() {
  const { register, handleSubmit, reset } = useForm<Resource>();
  const [categoryList, setCategoryList] = useState<Category[]>();
  const [reloadCategories, setReloadCategories] = useState<boolean>(false);

  const submitAction: SubmitHandler<Resource> = (data) => {
    const datetime = new Date().toISOString().slice(0, 19);
    data.created_at = datetime;
    postResource(data);
    alert("Ressource créée avec succès !")
    reset();
  };

  useEffect(() => {
    if (reloadCategories === false) {
      return;
    } else {
      getCategories().then((list) => setCategoryList(list));
      setReloadCategories(false);
    }
  }, [reloadCategories]);

  return (
    <form onSubmit={handleSubmit(submitAction)}>
      <label htmlFor="title">Titre de la ressource :</label>
      <input
        type="text"
        {...register("title", {
          required: "Le titre est obligatoire",
        })}
      />
      <label htmlFor="description">Description :</label>
      <input id="description" type="text" {...register("description")} />

      <label htmlFor="url"> Hyperlien vers la ressource </label>
      <input id="url" type="url" {...register("url")} />

      <label htmlFor="type">Type de ressource :</label>
      <select {...register("type")} {...register("type")}>
        {Object.keys(ResourceType).map((e) => (
          <option key={e} value={e}>{e}</option>
        ))}
      </select>

      <label htmlFor="status">Status de la ressource :</label>
      <select {...register("status")}>
        {Object.keys(ResourceStatus).map((e) => (
          <option key={e} value={e}>{e}</option>
        ))}
      </select>

      <label htmlFor="category">Catégorie associée</label>
      <select
        {...register("category.id")}
        onClick={() => setReloadCategories(true)}
      >
        {categoryList?.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <button type="submit">Publier</button>
    </form>
  );
}
