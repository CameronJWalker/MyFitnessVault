import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js";
import Vault from "../styles/Vault.module.css"

export default function NutritionVault() {
    const [fetchError, setFetchError] = useState(null)
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
      
      const handleDeleteWorkout = async (id) => {
        try {
          const { error } = await supabase.from('nutrition').delete().eq('id', id);
          if (error) {
            throw new Error('Could not delete the workout');
          }
    
          setNutritions((prevNutritions) => prevNutritions.filter((nutritions) => nutritions.id !== id));
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Meal</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Fat</th>
                    <th>Carbs</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {nutritions &&
                    nutritions.map((nutrition) => (
                    <tr key={nutritions.id}>
                        <td><button className={`${Vault.deleteButton} ${Vault.customTd}`} onClick={() => handleDeleteWorkout(nutrition.id)}>X</button></td>
                        <td>{nutrition.mealName}</td>
                        <td>{nutrition.calories}</td>
                        <td>{nutrition.protein}</td>
                        <td>{nutrition.fat}</td>
                        <td>{nutrition.carbs}</td>
                        <td>{nutrition.created_at}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}