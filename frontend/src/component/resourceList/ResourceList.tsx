import { useEffect, useState } from "react";
import type { Resource } from "../../models/Resource";
import {getResources, getRessourceByType} from "../../services/ResourceService";
import styles from "./styles.module.css";
import '../../style/ResourceListSelected.css'
import {Link} from "react-router";

export function ResourceList() {
  const [resourceList, setResourceList] =
    useState<(Resource & { id: number })[]>();

  useEffect(() => {
    getResources().then((r) => setResourceList(r));
  }, []);

    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        if (selectedType === "") {
            getResources().then(setResourceList);
        } else {
            getRessourceByType(selectedType).then(setResourceList);
        }
    }, [selectedType]);


    return (

      <>
          <select
              className="resource-filter"
              onChange={(e) => setSelectedType(e.target.value)}
          >
              <option value="">Tous les types</option>
              <option value="VIDEO">Vidéo</option>
              <option value="ARTICLE">Article</option>
              <option value="DOCUMENTATION">Documentation</option>
              <option value="COURSE">Cours</option>
              <option value="OTHER">Autre</option>
          </select>
          <section className={styles.resourceList}>
              <h1> Mes ressources </h1>
              <ul>
                  {resourceList?.map((res) => (
                      <li key={res.id}>
                          <Link to={`/resources/${res.id}`}>
                              <h2 className={styles.title}>{res.title}</h2>
                          </Link>
                          <section className={styles.tags}>
                              <p className={`${styles.statusTag} ${styles.tag}`}>
                                  {res.status}
                              </p>
                              <p className={`${styles.typeTag} ${styles.tag}`}> {res.type} </p>
                          </section>
                          <p className="description">{res.description}</p>
                          <a href={res.url}>link to resource</a>
                          <p className="creation">{res.created_at}</p>
                      </li>
                  ))}
              </ul>
          </section>
      </>

  );
}
