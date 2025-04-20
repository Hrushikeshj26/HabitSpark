import '../assets/landing.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  let navigate = useNavigate()

  let navigateToSingupPage = () => {
    navigate('/login')
  }

  return (
    <>
      <nav>
        <div className='nav__header'>
          <div className='nav__logo'>
            <a href='/'>HabitSpark</a>
          </div>
        </div>
        <ul className='nav__links'>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/about'>
              ABOUT US
            </a>
          </li>
          {/* <li>
            <a href='#'>CONTACT</a>
          </li> */}
        </ul>
      </nav>
      <div className='contain'>
        <div className='container__left'>
          <h1>Build Your Good Habits</h1>
          <div className='container__btn'>
            <button className='btn' onClick={() => navigateToSingupPage()}>
              LOGIN-Now
            </button>
            <a href='login.html' id='myLink'></a>
          </div>
        </div>
        <div className='container__right'>
          <div className='images'>
            <img src='assets/hero-img3.jpg' alt='tent-1' className='tent-1' />
            <img src='assets/hero-img1.jpg' alt='tent-2' className='tent-2' />
          </div>
          <div className='content'>
            <h4>Habit | Spark</h4>
            <h2>Spark of Good Habits</h2>
            <h3>Your Habit Partner</h3>
            <p>
              monitor your progress, and stay motivated through visual progress
              reports.
            </p>
          </div>
        </div>
        <div id='label'>
          <span></span> 
          What you get!
        </div>
      </div>

      <div id='features'>
        <div className='card-container'>
          <div className='card'>
            <img src='assets/hero-img5.jpg' />
            <div className='card-content'>
              <h1>Habit tutorials</h1>
              <p>
                Learn about effective strategies, common pitfalls, and the
                science behind habit formation to help you create lasting
                positive changes in your life. Watch now and take the first step
                towards a better you!
              </p>
            </div>
          </div>

          <div className='card'>
            <img src='assets/hero-img6.jpg' />
            <div className='card-content'>
              <h1>Reward and Badges</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis officiis quibusdam ea iste, magnam repellat, impedit a
                ipsum non dolores veritatis voluptatibus reprehenderit
                recusandae sed laboriosam voluptatum eos, ut omnis?
              </p>
            </div>
          </div>

          <div className='card'>
            <img src='assets/hero-img4.jpg' />
            <div className='card-content'>
              <h1>Stay Organized</h1>
              <p>
                Stay organized and on track with our editable habits and goals
                feature combined with a to-do list. Easily set, edit, and update
                your habits and goals to reflect your evolving priorities
              </p>
            </div>
          </div>
        </div>
        <div className='card-container'>
          <div className='card'>
            <img src='assets/hero-img2.jpg' />
            <div className='card-content'>
              <h1>Progress Visualization</h1>
              <p>
                Progress visualization helps users see their habit tracking data
                in a clear and engaging manner. By providing visual insights,
                users can better understand their progress, identify patterns,
                and stay motivated..
              </p>
            </div>
          </div>
          <div className='card'>
            <img src='assets/hero-img7.jpg' />
            <div className='card-content'>
              <h1>Responsive Design</h1>
              <p>
                ensuring an optimal viewing experience across all devices, from
                desktops to smartphones. With flexible layouts and adaptive
                elements, the site automatically adjusts to different screen
                sizes, providing a seamless and intuitive user experience.
              </p>
            </div>
          </div>

          <div className='card'>
            <img src='assets/hero-img8.jpg' />
            <div className='card-content'>
              <h1>Privacy & Security</h1>
              <p>
                We prioritize your privacy and security by implementing robust
                measures to ensure your data remains safe,With our high security
                standards, you can trust that your personal data is handled with
                the utmost care and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className='footer'>
        <div className='footer__logo'>
          <p>HabitSpark</p>
          <div className='social'>
            <a href='#'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#'>
              <i className='fab fa-snapchat'></i>
            </a>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <br />
            <h5>HabitSpark@gmail.com</h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
