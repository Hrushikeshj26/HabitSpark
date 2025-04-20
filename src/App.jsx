import './App.css'
import About from './components/About'
import Home from './components/Home'
import Landing from './components/Landing'
import Auth from './components/Auth'
import TipVideos from './components/TipVideos'
import Progress from './components/Progress'
import Profile from './components/Profile'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App () {
  let accessToken =
    localStorage.getItem('accessToken') !== null
      ? localStorage.getItem('accessToken')
      : ''

  let config = {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  }

  return (
    // <div className='flex'>
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/' exact element={<Landing />}></Route>
          <Route path='/login' exact element={<Auth />}></Route>
          <Route path='/home' exact element={<Home />}></Route>
          <Route path='/tipvideos' exact element={<TipVideos />}></Route>
          <Route path='/progress' exact element={<Progress />}></Route>
          <Route path='/profile' exact element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    // </div>
  )
}

export default App
