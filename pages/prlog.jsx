import React, { useState } from 'react';
import supabase from "./api/supabaseClient.js"

export default function PRLog() {
    const [ name, setName ] = useState('')
    const [ pr, setPR ] = useState('')
    const [ formError, setFormError ] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const { data, error } = await supabase 
        .from('prlog')
        .insert([{ name, pr }])

      if (error) {
        console.log("Error!")
        setFormError('Error!')
      }
      if (data) {
        console.log(data)
        setFormError(null)
      }
    }

  return(
    <div className="container">
      <div className="title"> 
        <h2>Personal Records</h2>
        <h6> Enter Personal Records Below </h6>
        <div className="logo">
          <img src="2logo.png" alt="TheWorkoutApp" className='image'/>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="topic-details">
            <div className="input-wrap">
              <span className= "details">Workout Name</span>
                <input
                  type="text"
                  placeholder=" Enter Workout Name"
                  name="workoutName"   
                  className="input-field"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  />
            </div>
            <div className="input-wrap">
              <span className="details">PR Weight</span>
                  <input
                    type="number" 
                    placeholder="Enter PR weight"
                    name="weight" 
                    className="input-field" 
                    value={pr}
                    onChange={(e) => setPR(e.target.value)}
                    />
            </div>
            <div className="button">
              <input type="submit" value="Submit New Workout"className="sign-btn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
