export default function IngredientList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient} className="text-[#475467] leading-[28px]">
      {ingredient}
    </li>
  ));
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="mb-[48px]">{ingredientsListItems}</ul>
      {props.ingredients.length > 3 && (
        <div className="flex flex-wrap justify-between gap-[12px] items-center rounded-lg bg-[#fde3c3] px-[28px] py-[10px]">
          <div ref={props.ref}>
            <h3 className="text-lg font-medium leading-6">
              Ready for a recipe?
            </h3>
            <p className="text-[#333] text-sm leading-5">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button onClick={props.getRecipe} className="primary-btn">
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
