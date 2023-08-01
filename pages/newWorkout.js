import React, { useState, useEffect } from 'react';
import supabase from "./api/supabaseClient.js"

export default function NewWorkout() {
    const [ name, setName ] = useState('')
    const [ sets, setSets ] = useState('')
    const [ reps, setReps ] = useState('')
    const [ weight, setWeight ] = useState('')
    const [ rest, setRest ] = useState('')
    const [ formError, setFormError ] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const { data, error } = await supabase 
        .from('workouts')
        .insert([{ name, sets, reps, weight, rest }])
        .select()

      if (error) {
        setFormError('Error!')
        console.log(formError)
      }
      if (data) {
        console.log(data)
        setFormError(null)
      }
      setName('')
      setSets('')
      setReps('')
      setWeight('')
      setRest('')
    }

    return (
    <div className="container">
      <div className="title">
        <h2>New Workout</h2>
        <h6> Enter Workout Details Below </h6>
        <div className="logo">
          <img src="2logo.png" alt="TheWorkoutApp" className='image'/>
        </div>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="topic-details">
            <div className="input-wrap">
              <span className= "details">Workout Name</span>
                <input
                      type="text"
                      placeholder=" Enter Workout Name"
                      name="workoutname"   
                      className="input-field" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                />
            </div>
            <div className="input-wrap">
              <span className="details"># of Sets</span>
                  <input
                        type="number" 
                        placeholder="Enter # of Sets"
                        name="sets" 
                        className="input-field" 
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        required
                  />
            </div>

            <div className="input-wrap">
              <span className="details"># of Reps</span>
                  <input
                        type="number" 
                        placeholder="Enter # of Reps"
                        name="reps" 
                        className="input-field" 
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        required
                  />
            </div>
            <div className="input-wrap">
              <span className="details">Weight</span>
                  <input
                        type="text" 
                        placeholder="Enter Weight (lbs)"
                        name="weight" 
                        className="input-field" 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                  />
            </div>
            <div className="input-wrap">
              <span className="details">Rest Duration</span>
                  <input
                        type="number" 
                        placeholder="Enter Rest Duration in seconds "
                        name="restDuration" 
                        value={rest} 
                        className="input-field" 
                        autoComplete="off"
                        onChange={(e) => setRest(e.target.value)}
                        required
                  />
              </div>
              <div className="button">
                <input type="submit" value="Submit New Workout"className="sign-btn" />
              </div>
            </div>
      </form>
    </div>
    
    )
}