export default function IngredientList(props){
     const ingredient_list=props.ingredients.map((ingredient)=>{
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })
    return (
        <section>
                <h2>ingredients on hand:</h2>
                <ul>
                    {ingredient_list}
                </ul>

                {props.ingredients.length > 3 &&<div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section>
    )
}