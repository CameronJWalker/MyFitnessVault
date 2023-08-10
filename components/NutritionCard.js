import Feed from "../styles/Feed.module.css"

const NutritionCard = ({ nutrition }) => {

    return (
        <table className={Feed.card}>
            <tr>
                <th>Meal Name: </th>
                <td>{nutrition.mealName}</td>
            </tr>
            <tr>
                <th>Calories: </th>
                <td>{nutrition.calories}</td>
            </tr>
            <tr>
                <th>Protein: </th>
                <td>{nutrition.protein}</td>
            </tr>
            <tr>
                <th>Fat: </th>
                <td>{nutrition.fat}</td>
            </tr>
            <tr>
                <th>Carbs: </th>
                <td>{nutrition.carbs}</td>
            </tr>
        </table>
    )
}

export default NutritionCard