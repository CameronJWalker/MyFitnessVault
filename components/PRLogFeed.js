import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js"
import Feed from "../styles/Feed.module.css"
import PRLogCard from "./PRLogCard.js"

export default function WorkoutFeed() {
  const [personalRecords, setPersonalRecords] = useState(null)
  const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
      const fetchPRs = async () => {
        const { data, error } = await supabase
        .from('prlog')
        .select()
        .order('created_at', { ascending: false })
        .limit(4);

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
        <div className={Feed.container}>
          <h3>Personal Records</h3>
            {fetchError && (<p>{fetchError}</p>)}
            {personalRecords && (
                <div className={Feed.prlog}>
                    {personalRecords.map(personalRecord => (
                        <PRLogCard  key={personalRecord.id} personalRecord={personalRecord}/>
                    ))}
                </div>
            )}
        </div>
    )
}