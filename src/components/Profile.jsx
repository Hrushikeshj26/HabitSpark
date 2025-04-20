import Navbar from './Navbar'
import ProfileForm from './ProfileForm'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Profile = () => {
  let [username, setUsername] = useState()
  let [email, setEmail] = useState()
  let navigate = useNavigate()
  let accessToken = localStorage.getItem('accessToken')

  if (accessToken === null || accessToken === '') {
    navigate('/home')
  } else {
    let config = {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }
    useEffect(() => {
      axios
        .get('https://habit-server-one.vercel.app/users/current', config)
        .then(res => {
          setUsername(res.data.username)
          setEmail(res.data.email)
        })
        .catch(err => {
          if (err.response.status == 401) {
            navigate('/login')
          }
        })
    })
  }

  return (
    <div className='bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] w-full h-screen'>
      <Sidebar />
      <Navbar pagename="Profile"/>
      <div className='pt-10 pb-36 bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] xl:pl-64 pl-10 justify-center items-center'>
        <div className='bg-[#081b29] max-w-xl mx-auto mt-10 text-white p-8 rounded-md shadow-md'>
          <h1 className='text-2xl text-white font-bold mb-4'>User Profile:</h1>
          <ProfileForm username={username} email={email} />
        </div>
      </div>
    </div>
  )
}

export default Profile
