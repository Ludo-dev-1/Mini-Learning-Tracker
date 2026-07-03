import { useEffect, useState } from "react";
import type { Resource } from "../../models/Resource";
import { getRessourceById } from "../../services/ResourceService";
import {useParams} from "react-router";
import './ResourceDetails.css'



export function ResourceDetails() {
    const { id } = useParams();
    const [resource, setResource] = useState<Resource & { id: number }>();

    useEffect(() => {
        if (!id) return;
        getRessourceById(Number(id)).then((r) => setResource(r));
    }, [id]);

    if (!resource) return <p>Chargement...</p>;

    return (
        <section className="resource-details">
            <h2>{resource.title}</h2>

            <section className="resource-meta">
                <p className="tag status-tag">{resource.status}</p>
                <p className="tag type-tag">{resource.type}</p>
            </section>

            <p>{resource.description}</p>

            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                Voir la ressource
            </a>

            <p className="creation-date">{resource.created_at}</p>
        </section>
    );

}
