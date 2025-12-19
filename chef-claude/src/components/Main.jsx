import React from "react"
import ClaudeRecipe from "/src/components/recipe.jsx"
import IngredientList from "/src/components/ingredient-list.jsx"
import {getRecipeFromMistral} from "/src/ai.js"

export default function Main(){

    const [ingredients,setinGredient]=React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])    

    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(()=>{
        if(recipe !== "" && recipeSection.current !==null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    async function getRecipe() {
        console.log("Getting recipe for ingredients:", ingredients)
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            console.log("Received recipe:", recipeMarkdown)
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Error getting recipe:", error)
        } finally {
            null
        }
    }
    
    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setinGredient(prevIngredient=>[...prevIngredient,newIngredient])
    }
    // function for event listner
    // function handleSubmit(event){
    //     event.preventDefault(); //prevents the form from refreshing
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient=formData.get("ingredient")
    //     setinGredient(prevIngredients=>[...prevIngredients,newIngredient])
    //     event.target.reset()
    // }

//action is used instead of onsubmit for traditional HTML forms that submit to a server URL
    

    return (
        <main>
            <form className="ingredient-form" action={addIngredients}> 
                <input 
                        placeholder="e.g, oregano" 
                        aria-label="Add ingredient" 
                        type="text" 
                        name="ingredient"
                />

                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientList 
                    ref={recipeSection}
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
                />}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}