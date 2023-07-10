import Feed from "../styles/Feed.module.css"

const NutritionCard = ({ nutrition }) => {

    return (
        <div className={Feed.card}>
            <p>{nutrition.mealName} {nutrition.calories} {nutrition.protein} {nutrition.fat} {nutrition.carbs}</p>
        </div>
    )
}

export default NutritionCard