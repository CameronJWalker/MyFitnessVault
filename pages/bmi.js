import React, { useState } from 'react';
import Calc from '../styles/Calc.module.css'

export default function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [BMI, setBMI ] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const heightInInches = (parseInt(heightFeet) * 12) + parseInt(heightInches);
        const heightInMeters = heightInInches * .0254;
        const weightInKg = parseInt(weight) / 2.205
        const calculatedBMI = weightInKg / (heightInMeters * heightInMeters)
        setBMI(calculatedBMI.toFixed(1));

        setWeight('')
        setHeightFeet('')
        setHeightInches('')
    };

    return (
        <div className="container">
            {BMI ? (
                <>
                <div className={Calc.bmicontainer}>
                    <h3>BMI Categories</h3>
                    <p>Underweight: 18.5 or less</p>
                    <p>Normal weight: 18.5-24.9</p>
                    <p>Overweight: 25-29.9</p>
                    <p>Obesity: 30 or greater</p>
                    <h4>Your Body Mass Index (BMI): {BMI}</h4>
                </div>
                <div>
                    
                </div>
                </>
            ) : (
                <>
                <div className="title">
                <h2>BMI Calculator</h2>
                <h6>Enter your weight and height</h6>
                <div className="logo">
                    <img src="2logo.png" alt="TheWorkoutApp" className="image"/>
                </div>
            </div>
            <form action="#" onSubmit={handleSubmit}>
                <div className="topic-details">
                    <div className="input-wrap">
                        <span className="details">Weight</span>
                        <input 
                            type="number"
                            placeholder="Enter weight (lbs)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            />
                    </div>
                    <div className="input-wrap">
                        <span className="details">Height</span>
                        <input 
                            type="number"
                            placeholder="Enter height (feet)"
                            value={heightFeet}
                            onChange={(e) => setHeightFeet(e.target.value)}
                            required
                            />
                    </div>
                    <div className="input-wrap">
                        <input 
                            type="number"
                            placeholder="Enter height (inches)"
                            value={heightInches}
                            onChange={(e) => setHeightInches(e.target.value)}
                            required
                            />
                    </div>
                    <div className="button">
                        <input type="submit" value="Calculate BMI" className="sign-btn" />
                    </div>
                </div>
            </form>
            </>
            )}
        </div>
    )
}