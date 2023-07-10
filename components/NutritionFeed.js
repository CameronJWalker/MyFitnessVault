import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Feed from "../styles/Feed.module.css"
import NutritionCard from "./NutritionCard.js"

export default function HomeFeed() {
    const [fetchError, setFetchError] = useState(null)
    const [nutritions, setNutritions] = useState(null)

    useEffect(() => {
      const fetchNutritions = async () => {
        const { data, error } = await supabase
        .from('nutrition')
        .select()

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
      console.log(nutritions)
      fetchNutritions()
    }, [])

    return (
        <div className={Feed.container}>
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