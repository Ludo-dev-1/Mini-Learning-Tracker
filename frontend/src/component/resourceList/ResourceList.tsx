import { useEffect, useState } from "react";
import type { Resource } from "../../models/Resource";
import { getResources } from "../../services/ResourceService";
import styles from "./styles.module.css";

export function ResourceList() {
  const [resourceList, setResourceList] =
    useState<(Resource & { id: number })[]>();

  useEffect(() => {
    getResources().then((r) => setResourceList(r));
  }, []);
  
  return (
    <section className={styles.resourceList}>
      <h1> Mes ressources </h1>
      <ul>
        {resourceList?.map((res) => (
          <li key={res.id}>
            <h2><a href="">{res.title}</a></h2>
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
  );
}
