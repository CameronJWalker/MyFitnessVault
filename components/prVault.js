import React, { useState, useEffect } from 'react';
import supabase from "../pages/api/supabaseClient.js";
import Vault from "../styles/Vault.module.css"

export default function PRVault() {
    const [fetchError, setFetchError] = useState(null)
    const [personalRecords, setPersonalRecords] = useState(null)
    
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
        <div>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Worout</th>
                    <th>PR</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {personalRecords &&
                    personalRecords.map((personalRecord) => (
                    <tr key={personalRecords.id}>
                        <td><button className={`${Vault.deleteButton} ${Vault.customTd}`} onClick={() => handleDeleteWorkout(nutrition.id)}>X</button></td>
                        <td>{personalRecord.name}</td>
                        <td>{personalRecord.pr}</td>
                        <td>{personalRecord.created_at}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}