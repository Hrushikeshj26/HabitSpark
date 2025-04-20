import Sidebar from './Sidebar'
import Navbar from './Navbar'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import HabitForm from './HabitForm'
import HabitList from './HabitList'
import DailyChart from './DailyChart'
import WeeklyChart from './WeeklyChart'
import MonthlyChart from './MonthlyChart'

const Progress = () => {
  const [habits, setHabits] = useState([]) // Initialize as an empty array
  const location = useLocation()
  const accessToken = localStorage.getItem('accessToken')
  let config = {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  }

  const fetchHabits = async () => {
    const response = await axios.get('https://habit-server-one.vercel.app/habits', config)
    setHabits(response.data)
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  return (
    <div className='background'>
      <Sidebar />
      <Navbar pagename="Progress" />
      <div className='bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] grid grid-cols-1 gap-2 xl:pl-96'>
        <DailyChart config={config} />
        <WeeklyChart config={config} />
        <MonthlyChart config={config} />
      </div>
    </div>
  )
}

export default Progress
