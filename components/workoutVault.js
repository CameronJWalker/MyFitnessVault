import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js";
import Vault from "../styles/Vault.module.css"

export default function WorkoutVault() {
  const [fetchError, setFetchError] = useState(null);
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const { data, error } = await supabase
        .from('workouts')
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        setFetchError('Could not fetch the feed');
        setWorkouts(null);
        console.log(error);
      }
      if (data) {
        setWorkouts(data);
        setFetchError(null);
      }
    };
    fetchWorkouts();
  }, []);

  const handleDeleteWorkout = async (id) => {
    try {
      const { error } = await supabase.from('workouts').delete().eq('id', id);
      if (error) {
        throw new Error('Could not delete the workout');
      }

      setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className={Vault.scroll}>
        <thead>
          <tr>
            <th></th>
            <th>Workout Name</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Rest</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts &&
            workouts.map((workout) => (
              <tr key={workout.id}>
                <td key="buttonRow"><button className={`${Vault.deleteButton} ${Vault.customTd}`} onClick={() => handleDeleteWorkout(workout.id)}>X</button></td>
                <td key="workoutNameRow">{workout.name}</td>
                <td key="setsRow">{workout.sets}</td>
                <td key="repsRow">{workout.reps}</td>
                <td key="weightRow">{workout.weight}</td>
                <td key="restRow">{workout.rest}</td>
                <td key="dateRow">{workout.created_at}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
