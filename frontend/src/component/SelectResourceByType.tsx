import {useEffect, useState} from "react";
import {getResources, getRessourceByType, type Resource} from "../services/ResourceService.ts";

export function SelectResourceByType() {
    const [resources, setResources] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        if (selectedType === "") {
            getResources().then(setResources);
        } else {
            getRessourceByType(selectedType).then(setResources);
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
                <option value="COURSES">Cours</option>
                <option value="OTHER">Autre</option>
            </select>

            <ul className="resource-list">
                {resources.map((r:Resource) => (
                    <li key={r.id}>{r.title} — {r.type}</li>
                ))}
            </ul>
        </>
    );
}