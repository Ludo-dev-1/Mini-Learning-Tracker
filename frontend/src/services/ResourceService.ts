// GET    /api/resources
// GET    /api/resources/{resourceId}
// POST   /api/resources

import type { Resource } from "../models/Resource";

let server_url: string = "http://localhost:8080/api/";
let endpoint: string = "resources";

export async function getResources() {
  return await fetch(server_url + endpoint)
    .then((resp) => resp.json())
    .catch((err) => err.message);
}

export async function getRessourceById(id: number) {
  return await fetch(server_url + endpoint + "/" + id)
    .then((resp) => resp.json())
    .catch((err) => err.message);
}


export async function postResource(r: Resource) {
  alert(JSON.stringify(r));
  return await fetch(server_url + endpoint, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(r),
  }).catch(err => err.message);
}



export async function getRessourceByType(type: string) {
  return await fetch(server_url + endpoint + "/type?type=" + type)
      .then((resp) => resp.json())
      .catch((err) => err.message);
}