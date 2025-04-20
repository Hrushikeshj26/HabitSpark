import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const DailyChart = ({ config }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://habit-server-one.vercel.app/habits/daily-status',
          config
        )

        setData({
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              label: 'Daily Habit Status',
              data: [response.data.completed, response.data.incomplete],
              backgroundColor: [
                'rgba(0, 0, 255, 0.6)', // Completed
                'rgba(255, 99, 132, 0.6)' // Remaining
              ],
              hoverOffset: 4
            }
          ]
        })
      } catch (error) {
        console.error('Error fetching daily habit data:', error)
      }
    }
    fetchData()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-white rounded-3xl w-fit ml-10 flex flex-col mt-20 p-8 xl:ml-60'>
      <h2 className='text-xl font-semibold mb-4'>Daily Habit Status</h2>
      <Doughnut data={data} />
    </div>
  )
}

export default DailyChart
