import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Feed from "../styles/Feed.module.css"
import WorkoutCard from "./WorkoutCard.js"

export default function HomeFeed() {
    const [fetchError, setFetchError] = useState(null)
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
      const fetchWorkouts = async () => {
        const { data, error } = await supabase
        .from('workouts')
        .select()

        if (error) {
          setFetchError('Could not fetch the feed')
          setWorkouts(null)
          console.log(error)
        }
        if (data) {
          setWorkouts(data)
          setFetchError(null)
        }
      }
      console.log(workouts)
      fetchWorkouts()
    }, [])

    return (
        <div className={Feed.container}>
            {fetchError && (<p>{fetchError}</p>)}
            {workouts && (
                <div className={Feed.workouts}>
                    {workouts.map(workout => (
                        <WorkoutCard  key={workout.id} workout={workout}/>
                    ))}
                </div>
            )}
        </div>
    )
}