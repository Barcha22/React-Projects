import React from "react"
import ClaudeRecipe from "/src/components/recipe.jsx"
import IngredientList from "/src/components/ingredient-list.jsx"
import {getRecipeFromMistral} from "/src/ai.js"

export default function Main(){

    let [ingredients,setinGredient]=React.useState([])    

    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    async function getRecipe() {
        console.log("Getting recipe for ingredients:", ingredients)
        setLoading(true)
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            console.log("Received recipe:", recipeMarkdown)
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Error getting recipe:", error)
        } finally {
            setLoading(false)
        }
    }

    // function for event listner
    // function handleSubmit(event){
    //     event.preventDefault(); //prevents the form from refreshing
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient=formData.get("ingredient")
    //     setinGredient(prevIngredients=>[...prevIngredients,newIngredient])
    //     event.target.reset()
    // }

    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setinGredient(prevIngredient=>[...prevIngredient,newIngredient])
    }
//action is used instead of onsubmit for traditional HTML forms that submit to a server URL
    

    return (
        <main>
            <form className="ingredient-form" action={addIngredients}> 
                <input placeholder="e.g, oregano" aria-label="Add ingredient" type="text" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} getRecipe={getRecipe}/>}
            {loading && <p>Loading recipe...</p>}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}