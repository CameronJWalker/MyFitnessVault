import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Feed from "../styles/Feed.module.css"
import NutritionCard from "./NutritionCard.js"

export default function NutritionFeed() {
    const [fetchError, setFetchError] = useState(null)
    const [nutritions, setNutritions] = useState(null)

    useEffect(() => {
      const fetchNutritions = async () => {
        const { data, error } = await supabase
        .from('nutrition')
        .select()
        .order('created_at', { ascending: false })
        .limit(4);

        if (error) {
          setFetchError('Could not fetch the feed')
          setNutritions(null)
          console.log(error)
        }
        if (data) {
          setNutritions(data)
          setFetchError(null)
        }
      }
      fetchNutritions()
    }, [])

    return (
        <div className={Feed.container}>
            <h3>Nutrition</h3>
            {fetchError && (<p>{fetchError}</p>)}
            {nutritions && (
                <div className={Feed.card}>
                    {nutritions.map(nutrition => (
                        <NutritionCard  key={nutrition.id} nutrition={nutrition}/>
                    ))}
                </div>
            )}
        </div>
    )
}