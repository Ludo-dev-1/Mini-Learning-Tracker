import { useEffect, useState } from "react";
import type { Resource } from "../../models/Resource";
import { getRessourceById } from "../../services/ResourceService";

interface ResourceProps {
    id: number;
}

export function ResourceDetails(props : ResourceProps) {
  const [resource, setResource] = useState<Resource & { id: number }>();

  useEffect(() => {
    getRessourceById(props.id).then((r) => setResource(r));
  }, []);

  return (
    <section>
      <h2></h2>
      <section>
        <p>{resource?.status}</p>
        <p>{resource?.type} </p>
      </section>
      <p>{resource?.description}</p>
      <a>link to resource</a>
      <p>{resource?.created_at}</p>
    </section>
  );
}
