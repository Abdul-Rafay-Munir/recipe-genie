const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

export async function getRecipeFromSpoonacular(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsArr}&number=1&ranking=1&ignorePantry=true&apiKey=${SPOONACULAR_API_KEY}`,
    );

    const data = await res.json();

    if (!data.length) {
      return "No recipe found with these ingredients";
    }

    const recipeId = data[0].id;

    const recipeRes = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${SPOONACULAR_API_KEY}`,
    );

    const recipeData = await recipeRes.json();

    return formatRecipeMarkdown(recipeData);
  } catch (err) {
    console.error(err.message);
  }
}

function formatRecipeMarkdown(recipe) {
  return `
## ${recipe.title}

![${recipe.title}](${recipe.image})

### Ingredients
${recipe.extendedIngredients.map((ing) => `- ${ing.original}`).join("\n")}

### Instructions
${recipe.instructions || "_No instructions available._"}
`;
}
