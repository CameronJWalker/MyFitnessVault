import Feed from "../styles/Feed.module.css"

const WorkoutCard = ({ workout }) => {

    return (
        <div className={Feed.card}>
            <p>{workout.name} {workout.type} {workout.sets} {workout.reps} {workout.weigt} {workout.rest}</p>
        </div>
    )
}

export default WorkoutCard