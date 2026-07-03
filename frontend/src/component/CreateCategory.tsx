import { useForm } from "react-hook-form";
import { type Category, postCategory } from "../services/CategoryService.ts";
import "../style/CreateCategory.css";

export function CreateCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm<Category>();

    const onSubmit = async (data: Category) => {
        try {
            await postCategory(data);
            alert("Formulaire envoyé avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            alert("Une erreur est survenue.");
        }
    };

    return (
        <form className="create-category-form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <label>Nom</label>
                <input
                    {...register("name", {
                        required: "Le nom est obligatoire",
                        maxLength: {
                            value: 20,
                            message: "Le nom ne doit pas dépasser 20 caractères"
                        }
                    })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div className="form-group">
                <label>Description</label>
                <input
                    {...register("description", {
                        required: "La description est obligatoire",
                        minLength: {
                            value: 5,
                            message: "La description doit contenir au moins 5 caractères"
                        }
                    })}
                />
                {errors.description && (
                    <p className="error-message">{errors.description.message}</p>
                )}
            </div>

            <button type="submit">Envoyer</button>
        </form>

    );
}
