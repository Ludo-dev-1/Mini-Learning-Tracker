// GET    /api/categories
// POST   /api/resources


export type Category = {
    id: number;
    description: string;
    name: string;
    resource: any[];
};

const server_url: string = "http://localhost:8080/api/";
const endpoint: string = "categories";

export async function getCategories() {
    try {
        const response = await fetch(server_url+endpoint);
        if (!response.ok) {
            throw new Error("Erreur API " + response.status);
        }
        return await response.json();

    } catch (err) {
        console.error("Erreur lors de la récupération des catégories :", err);
        return [];
    }
}

export async function postCategory(c: Category) {
    return await fetch(server_url + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(c)
    }).catch(err => err.message);
}
console.log("check");
