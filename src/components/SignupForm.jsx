import { useRef } from 'react'

const SignUp = ({ signUp }) => {
  const username = useRef()
  const email = useRef()
  const password = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    signUp(username.current.value,email.current.value,password.current.value)
  }
  return (
    <form onSubmit={handleSubmit} className='sign-up-form'>
      <h1 className='tit'>HabitSpark</h1>
      <p className='tit'>
        <b>
          Build a Better Habit, <br />
          Build a Better Life
        </b>
      </p>
      <h4 className='title'>Sign up</h4>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Username'
          ref={username}
          required
        />
      </div>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
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
      <input type='submit' className='btn' id='submit' value='Sign up' />
      <div className='social-media'></div>
    </form>
  )
}

export default SignUp
