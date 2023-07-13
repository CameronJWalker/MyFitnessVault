import Feed from "../styles/Feed.module.css"

const NutritionCard = ({ nutrition }) => {

    return (
        <div className={Feed.card}>
            <h4>{nutrition.mealName}</h4>
            <h4>Calories:</h4>
            <p>{nutrition.calories}</p>
            <h4>Protien:</h4>
            <p>{nutrition.protein}</p> 
            <h4>Fat:</h4>
            <p>{nutrition.fat}</p> 
            <h4>Carbs:</h4>
            <p>{nutrition.carbs}</p>
        </div>
    )
}

export default NutritionCard