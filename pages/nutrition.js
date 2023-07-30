import React, { useState } from 'react';
import supabase from "./api/supabaseClient.js"

export default function Nutrition() {
    
    const [ mealName, setMealName ] = useState('')
    const [ calories, setCalories ] = useState('')
    const [ protein, setProtein ] = useState('')
    const [ fat, setFat ] = useState('')
    const [ carbs, setCarbs ] = useState('')
    const [ formError, setFormError ] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase 
          .from('nutrition')
          .insert([{ mealName, fat, carbs, protein, calories }])
        
        if (error) {
            setFormError('Error!')
            console.log(formError)
        }
        if (data) {
          console.log(data)
          setFormError(null)
        }
        setMealName('')
        setCalories('')
        setProtein('')
        setFat('')
        setCarbs('')
      }
   
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
                            name="mealName"   
                            className="input-field" 
                            value={mealName}
                            onChange={(e) => setMealName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-wrap">
                        <span className="details">Calories</span>
                        <input
                            type="number" 
                            placeholder="Enter Calories"
                            name="calories"  
                            className="input-field" 
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-wrap">
                        <span className="details">Protein(g)</span>
                        <input
                            type="number" 
                            placeholder="Enter Protein(g)"
                            name="protein" 
                            className="input-field" 
                            value={protein}
                            onChange={(e) => setProtein(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-wrap">
                        <span className="details">Fat(g)</span>
                        <input
                            type="number" 
                            placeholder="Enter Fat(g) "
                            name="fat" 
                            className="input-field" 
                            value={fat}
                            onChange={(e) => setFat(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-wrap">
                        <span className="details">Carbs(g)</span>
                        <input
                            type="number"
                            placeholder="Enter Carbs (g) " 
                            name="carbs" 
                            className="input-field" 
                            value={carbs}
                            onChange={(e) => setCarbs(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit Nutrition"className="sign-btn" />
                    </div>
                </div>
            </form>
        </div>
    );
}