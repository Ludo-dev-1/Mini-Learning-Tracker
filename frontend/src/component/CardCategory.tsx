import { useEffect, useState } from "react";
import { type Category, getCategories } from "../services/CategoryService.ts";
import "../style/CardCategory.css";

export function CardCategory() {
    const [categories, setCategory] = useState<Category[] | null>(null);

    useEffect(() => {
        getCategories().then((data) => setCategory(data));
    }, []);

    return (
        <ul className="category-list">
            {categories?.map((category) => (
                <li key={category.id} className="category-item">
                    {category.name}
                </li>
            ))}
        </ul>
    );
}
