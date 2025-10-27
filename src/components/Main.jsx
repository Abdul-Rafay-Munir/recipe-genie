import { useEffect, useRef, useState } from "react";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
    const [ingredients,setIngredients] =useState([])

    const [recipe, setRecipe] = useState(false)
    const recipeSection=useRef(null)

    useEffect(() => {
        if (recipe!==""&&recipeSection.current!==null) {
            recipeSection.current.scrollIntoView({behaviour:"smooth"})
        }
    }, [recipe])
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);
        
    }
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient =>[...prevIngredient,newIngredient])
    }
    
    return (
        <main>
            <form action={addIngredient} className="flex justify-center gap-[11px] h-[38px]">
                <input 
                type="text" 
                name="ingredient" 
                id="ingredient" 
                placeholder="e.g. oregano"
                className="border border-gray-300 rounded-md flex-grow min-w-[150px] max-w-[400px] px-[9px] py-[13px] rounded-sm"
                required/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList ref={recipeSection} ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <Recipe recipe={recipe} />}
        </main>
        
    )
}