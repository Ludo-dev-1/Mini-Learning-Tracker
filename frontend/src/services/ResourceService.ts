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


export type Resource = {
  id:number;
  title: string;
  description: string;
  url: string;
  type: string;
  status: string;
  created_at: string;
  category: number;
};


export async function postResource(r: Resource) {
  return await fetch(server_url, {
    method: "POST",
    body: JSON.stringify({ r }),
  }).catch(err => err.message);
}
console.log("check");



export async function getRessourceByType(type: string) {
  return await fetch(server_url + endpoint + "/type?type=" + type)
      .then((resp) => resp.json())
      .catch((err) => err.message);
}