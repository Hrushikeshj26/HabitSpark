import { useRef } from 'react'

const LoginForm = ({ loginForm }) => {
  const email = useRef()
  const password = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    loginForm(email.current.value, password.current.value)
  }

  return (
    <form onSubmit={handleSubmit} className='sign-in-form'>
      <h1 className='tit'>HabitSpark</h1>
      <p className='tit'>
        <b>
          Build a Better Habit, <br />
          Build a Better Life
        </b>
      </p>
      <h4 className='title'>Login</h4>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          ref={email}
          required
        />
      </div>
      <div className='input-field'>
        <i className='fas fa-lock'></i>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          ref={password}
          required
        />
      </div>
      {/* <a href=' # ' className='for'>
        Forgot Your Password
      </a> */}
      <input type='submit' value='Login' className='btn solid' />
      <div className='social-media'></div>
    </form>
  )
}

export default LoginForm
