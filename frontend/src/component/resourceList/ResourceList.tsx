import { useEffect, useState } from "react";
import type { Resource } from "../../models/Resource";
import {getResources} from "../../services/ResourceService";
import styles from "./styles.module.css";
import '../../style/ResourceListSelected.css'
import {Link} from "react-router";


export function ResourceList() {
  const [resourceList, setResourceList] =
    useState<(Resource & { id: number })[]>();
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("")


    useEffect(() => {
        getResources().then((resources) => {
            let filtered = resources;

            if (selectedType !== "") {
                filtered = filtered.filter(
                    (r:Resource) => r.type === selectedType
                );
            }

            if (selectedStatus !== "") {
                filtered = filtered.filter(
                    (r:Resource) => r.status === selectedStatus
                );
            }

            setResourceList(filtered);
        });
    }, [selectedType, selectedStatus]);



    return (

      <>
          <div>
              <h2> Filtres </h2>
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
             <select
                  className="resource-filter"
                  onChange={(e) => setSelectedStatus(e.target.value)}
              >
                  <option value="">Tous les status</option>
                  <option value="TODO">A faire </option>
                  <option value="IN_PROGRESS">En cours </option>
                  <option value="DONE">Terminé </option>
              </select>
          </div>

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
