import Feed from "../styles/Feed.module.css"

const WorkoutCard = ({ workout }) => {

    return (
        <div className={Feed.card}>
            <h4>{workout.name}</h4>
            <p>{workout.type}</p>
            <h4>Sets:</h4>
            <p>{workout.sets}</p>
            <h4>Reps:</h4> 
            <p>{workout.reps}</p>
            <h4>Weight:</h4> 
            <p>{workout.weight}</p>
            <h4>Rest:</h4> 
            <p>{workout.rest}</p>
        </div>
    )
}

export default WorkoutCard