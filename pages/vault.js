import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Vault from "../styles/Vault.module.css"
import WorkoutVault from "../components/workoutVault.js"
import NutritionVault from "../components/nutritionVault.js"
import PRVault from "../components/prVault.js"

export default function MyVault() {

    return (
        <div className={Vault.container}>
            <div className={Vault.workouts}>
                <WorkoutVault />
            </div>
            <div className={Vault.prs}>
                <PRVault />
            </div>
            <div className={Vault.nutrition}>
                <NutritionVault />
            </div>
        </div>
    )
}