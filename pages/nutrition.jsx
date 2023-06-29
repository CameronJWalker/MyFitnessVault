import React, { useState } from 'react';
// import axios from 'axios';

export default function Nutrition() {
    const initInputs = {
        mealname: "",
        servsize: "",
        cal: "",
        fat: "",
        carbs: "",
        protein: ""
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
        // axios.post("/nutrition", inputs)
        //     .then(res => {
        //         return res.data
        //     })
        //     .catch(err => console.log(err.response.data.errMsg))
        setInputs(initInputs)
        console.log(inputs)
    }
   
    const {mealname, servsize, cal, fat, carbs, protein} = inputs
    return (
        <div className="container">
            <div className="title">
                <h2>Nutrition</h2>
                <h6> Enter Nutritional Details Below</h6>
                <div className="logo">
                    <img src="2logo.png" alt="TheWorkoutApp" className='image'/>
                </div>
            </div>
            <form action="#" onSubmit={handleSubmit}>
                <div className="topic-details">
                    <div className="input-wrap">
                        <span className= "details">Food Name</span>
                        <input
                            type="text"
                            placeholder=" Enter Food Name"
                            name="mealname"   
                            className="input-field" 
                            autoComplete="off"
                            value={mealname}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="input-wrap">
                        <span className="details">Serving Size</span>
                        <input
                            type="number" 
                            placeholder="Enter Serving Size"
                            name="servsize" 
                            className="input-field" 
                            autoComplete="off"
                            value={servsize}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="input-wrap">
                        <span className="details">Calories</span>
                        <input
                            type="number" 
                            placeholder="Enter Calories"
                            name="cal"  
                            className="input-field" 
                            autoComplete="off"
                            value={cal}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="input-wrap">
                        <span className="details">Protein(g)</span>
                        <input
                            type="number" 
                            placeholder="Enter Protein(g)"
                            name="protein" 
                            className="input-field" 
                            autoComplete="off"
                            value={protein}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="input-wrap">
                        <span className="details">Fat(g)</span>
                        <input
                            type="number" 
                            placeholder="Enter Fat(g) "
                            name="fat" 
                            className="input-field" 
                            autoComplete="off"
                            value={fat}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="input-wrap">
                        <span className="details">Carbs(g)</span>
                        <input
                            type="number"
                            placeholder="Enter Carbs (g) " 
                            name="carbs" 
                            className="input-field" 
                            autoComplete="off"
                            value={carbs}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit Nutrition"className="sign-btn" />
                    </div>
                </div>
            </form>
        </div>
    );
}