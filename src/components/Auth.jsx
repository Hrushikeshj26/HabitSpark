import axios from 'axios'
import '../assets/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUp from './SignupForm'

const Auth = () => {
  const navigate = useNavigate()
  const [clsName, setCls] = useState(false)

  function handleClick (cls) {
    if (cls == true) {
      setCls(true)
    } else {
      setCls(false)
    }
  }

  const loginForm = async (email, password) => {
    await axios
      .post('https://habit-server-one.vercel.app/users/login', {
        email: email,
        password: password
      })
      .then(res => {
        let accessToken = res.data.accessToken
        localStorage.setItem('accessToken', accessToken)
        setTimeout(() => {
          navigate('/home')
        }, 100)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  const signUp = async (username, email, password) => {
    await axios
      .post('https://habit-server-one.vercel.app/users/register', {
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        alert('User Registered Successfully')
        window.location.reload()
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  return (
    <div className={`${clsName ? 'container sign-up-mode' : 'container'}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <LoginForm loginForm={loginForm} />
          <SignUp signUp={signUp} />
        </div>
      </div>

      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>WellCome</h3>
            <p>Don't have an account?</p>
            <button
              className='btn transparent'
              id='sign-up-btn'
              onClick={() => handleClick(true)}
            >
              Sign up
            </button>
          </div>
          <img src='log.svg' className='image' alt='' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>WellCome</h3>
            <p>Already have an account?</p>
            <button
              className='btn transparent'
              id='sign-in-btn'
              onClick={() => handleClick(false)}
            >
              login
            </button>
          </div>
          <img src='register.svg' className='image' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Auth
