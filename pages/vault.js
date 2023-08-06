import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Vault from "../styles/Vault.module.css"
import WorkoutVault from "../components/workoutVault.js"
import NutritionVault from "../components/nutritionVault.js"
import PRVault from "../components/prVault.js"
import { useAuth } from '../AuthContext'

export default function MyVault() {
    const { user } = useAuth();

    return (
        <div>
            {user ? (
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
                ) : (
                    <div className={Vault.container}>
                        <div className={Vault.workouts}>
                            <h3>Log in to see your workouts...</h3>
                        </div>
                        <div className={Vault.prs}>
                            <h3>Log in to see your PR's...</h3>
                        </div>
                        <div className={Vault.nutrition}>
                            <h3>Log in to see your meals...</h3>
                        </div>
                </div>
            )}
        </div>
    )
}