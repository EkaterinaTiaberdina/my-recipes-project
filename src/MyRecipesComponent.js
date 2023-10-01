import imageCalories from './calories.png';
import imageIngredients from './list.png';

function MyRecipesComponent({label, image, calories, ingredients, proteins, fats, carbohydrates}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className='containerInput'>
                <div >
                    <img className='dish' src={image} alt="dish"/>
                </div>
                <div>
                <ul className='container list'>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <img src={imageIngredients} alt='Icon' width='28px'/>
                            {ingredient}
                        </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="containerInput">
                <div>
                    <p>
                        <img src={imageCalories} alt='Calories' width='32px'/>
                        {calories.toFixed()} calories
                    </p>
                </div>
            
                <div className='calories'>
                    <p><strong>Proteins:</strong> {proteins.toFixed(2)}g</p>
                </div>
                <div className='calories'>
                    <p><strong>Fats:</strong> {fats.toFixed(2)}g</p>
                </div>
                <div className='calories'>
                    <p><strong>Carbs:</strong> {carbohydrates.toFixed(2)}g</p>
                </div>
            </div>
        </div>
    )
}
export default MyRecipesComponent;