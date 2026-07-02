import { useEffect, useState } from "react";

type Category = {
    id: number;
    description: string;
    name: string;
    resource: any[];
};

export function CardCategory() {
    const [categories, setCategory] = useState<Category[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchAllCategory = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/categories");

                if (!response.ok) {
                    throw new Error("Erreur API " + response.status);
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    setCategory([]);
                } else {
                    setCategory(data);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des category :", error);
                setError(true);
                setCategory([]);
            }
        };

        fetchAllCategory();
    }, []);

    return (
        <>
            <ul>
                {categories?.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </>
    );
}
