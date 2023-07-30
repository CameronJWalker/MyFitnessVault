import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Vault from "../styles/Vault.module.css"
import WorkoutVault from "../components/workoutVault.js"

export default function MyVault() {
    const [fetchError, setFetchError] = useState(null)
    const [personalRecords, setPersonalRecords] = useState(null)
    const [nutritions, setNutritions] = useState(null)
    
    useEffect(() => {
        const fetchNutritions = async () => {
          const { data, error } = await supabase
          .from('nutrition')
          .select()
          .order('created_at', { ascending: false })
  
          if (error) {
            setFetchError(false)
            console.log(fetchError)
          }
          if (data) {
            setNutritions(data)
            setFetchError(true)
          }
        }
        fetchNutritions()
      }, [])

    useEffect(() => {
        const fetchPRs = async () => {
          const { data, error } = await supabase
          .from('prlog')
          .select()
          .order('created_at', { ascending: false })
  
          if (error) {
            setFetchError('Could not fetch the feed')
            setPersonalRecords(null)
            console.log(error)
          }
          if (data) {
            setPersonalRecords(data)
            setFetchError(null)
          }
        }
        fetchPRs()
      }, [])

    return (
        <div className={Vault.container}>
            <div className={Vault.workouts}>
                <WorkoutVault />
            </div>
            <div className={Vault.prs}>
                PR's
            </div>
            <div className={Vault.nutrition}>
                Nutrition
            </div>
        </div>
    )
}