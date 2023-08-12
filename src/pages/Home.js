import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import WorkoutForm from '../component/WorkoutForm'
import WorkoutDetails from '../component/WorkoutDetails'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const Home = () => {

    const {workouts, dispatch}  = useWorkoutsContext()
    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('https://workoutbuddy-yeon.onrender.com/api/workout')    
            // const responseClone= await response      
            const jason= await response.json()
            console.log(jason)

            if(response.ok)
            {
               dispatch({type: 'SET_WORKOUTS',payload: jason})
               
            }
        }

     fetchWorkouts()

    },[dispatch])
  return (
   <div className="home">
    <div className="workouts">
      {workouts && workouts.map((work)=>{
        console.log(work._id)

         return <WorkoutDetails key={work._id} workout={work}/>
        
})}
    </div>
    <WorkoutForm/>
   </div>
  )
}

export default Home
