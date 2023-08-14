import Feed from "../styles/Feed.module.css"

const WorkoutCard = ({ workout }) => {

    return (
        <table className={Feed.card}>
            <tbody>
                <tr>
                    <th>Workout Name: </th>
                    <td>{workout.name}</td>
                </tr>
                <tr>
                    <th>Sets: </th>
                    <td>{workout.sets}</td>
                </tr>
                <tr>
                    <th>Reps: </th>
                    <td>{workout.reps}</td>
                </tr>
                <tr>
                    <th>Weight: </th>
                    <td>{workout.weight} (lbs)</td>
                </tr>
                <tr>
                    <th>Rest: </th>
                    <td>{workout.rest} (s)</td>
                </tr>
            </tbody>
        </table>
  );
};

export default WorkoutCard