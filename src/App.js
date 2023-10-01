import { useEffect, useState } from 'react';
import video from './video-food.mp4';
import imageSearch from './search.png';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';


// https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=e86f61ea&app_key=2c144680dbb70dbcc64a55a94b13bda7

function App() {
  const MY_ID = "e86f61ea";
  const MY_KEY = "2c144680dbb70dbcc64a55a94b13bda7";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);

  const [wordSubmitted, setWordSubmitted] = useState("mango");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data)
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return(
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='containerInput'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      <div>
        <button onClick={finalSearch}>
          <img src={imageSearch} width='38px' alt='Button search'/>
        </button>
      </div>
      </div>
      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index}
        label = {element.recipe.label}
        image = {element.recipe.image}
        calories = {element.recipe.calories}
        ingredients = {element.recipe.ingredientLines}
        proteins = {element.recipe.totalNutrients.PROCNT.quantity}
        fats = {element.recipe.totalNutrients.FAT.quantity}
        carbohydrates = {element.recipe.totalNutrients.CHOCDF.quantity}
        />
      ))}

    </div>
  )
}

export default App;
