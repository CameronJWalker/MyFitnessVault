import React, { useState } from 'react';

export default function PRLog() {
  const initInputs = {
    workoutName: "",
    weight: ""
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
    // axios.post("/prlog", inputs)
    //         .then(res => {
    //             return res.data
    //         })
    //         .catch(err => console.log(err.response.data.errMsg))
    setInputs(initInputs)
  }

  const {workoutName, weight} = inputs
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
                  value={workoutName} 
                  onChange={handleChange}
                  required/>
            </div>
            <div className="input-wrap">
              <span className="details">PR Weight</span>
                  <input
                    type="number" 
                    placeholder="Enter PR weight"
                    name="weight" 
                    className="input-field" 
                    value={weight}
                    onChange={handleChange}
                    required/>
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
