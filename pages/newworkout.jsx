import React, { useState } from 'react';

export default function NewWorkout() {
    const initInputs = {
        workoutName: "",
        cOs: "",
        sets: "",
        reps: "",
        weight: "",
        duration: "",
        burned: ""
    }
    const [inputs, setInputs] = useState(initInputs);

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.post("/newworkout", inputs)
        //     .then(res => {
        //         return res.data
        //     })
        //     .catch(err => console.log(err.response.data.errMsg))
        setInputs(initInputs)
        console.log(inputs)
    }

    const {workoutname, cOs, sets, reps, weight, duration, burned} = inputs
    return (
    <div className="container">
      <div className="title">New Workout
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
                                autoComplete="off"
                                value={workoutname}
                                onChange={handleChange}
                                required
                />
            </div>

            <div className="input-wrap">
              <span className="details">Cardio or Strength</span>
                  <input
                       type="text" 
                       placeholder="Cardio or Stregnth"
                        name="cOs" 
                        value={cOs}
                        className="input-field" 
                        autoComplete="off"
                        onChange={handleChange}
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
                        autoComplete="off"
                        value={sets}
                        onChange={handleChange}
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
                        autoComplete="off"
                        value={reps}
                        onChange={handleChange}
                        required
                  />
            </div>
            <div className="input-wrap">
              <span className="details">Weight</span>
                  <input
                      type="text" 
                      placeholder="Enter Weight"
                      name="weight" 
                      className="input-field" 
                      autoComplete="off"
                      value={weight}
                      onChange={handleChange}
                      required
                  />
            </div>
            <div className="input-wrap">
              <span className="details">Workout Duration</span>
                  <input
                      type="number" 
                      placeholder="Enter Duration "
                      name="duration" 
                      value={duration} 
                      className="input-field" 
                      autoComplete="off"
                      onChange={handleChange}
                      required
                  />
            </div>

            <div className="input-wrap">
              <span className="details">Est. Calories Burned </span>
                    <input
                        type="number"
                        placeholder="Enter (e+calories burned)" 
                        name="burned"
                        value={burned}
                        onChange={handleChange}
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