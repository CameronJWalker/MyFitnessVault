import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Feed from "../styles/Feed.module.css"
import WorkoutCard from "./WorkoutCard.js"

export default function WorkoutFeed() {
    const [fetchError, setFetchError] = useState(null)
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
      const fetchWorkouts = async () => {
        const { data, error } = await supabase
        .from('workouts')
        .select()
        .order('created_at', { ascending: false })
        .limit(4);

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
      fetchWorkouts()
    }, [])

    return (
        <div className={Feed.container}>
            <h3>Workouts</h3>
            {fetchError && (<p>{fetchError}</p>)}
            {workouts && (
                <div>
                    {workouts.map(workout => (
                        <WorkoutCard  key={workout.id} workout={workout}/>
                    ))}
                </div>
            )}
        </div>
    )
}