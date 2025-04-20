const About = () => {
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
            <a href='/about'>ABOUT US</a>
          </li>
          {/* <li>
            <a href='#'>CONTACT</a>
          </li> */}
        </ul>
      </nav>
      <div className='contain'></div>
      <div id='features'>
        <div className='card-container w-full'>
          <div className='card w-10/12'>
            <div className='card-content text-center'>
              <h1 >About US</h1>
              <p className="text-8xl">
                At HabitSpark, we believe that small, consistent
                actions lead to significant personal growth. Our Habit Tracker
                System is designed to empower individuals to take control of
                their daily routines and achieve their goals, one habit at a
                time. Founded by a team of passionate developers and wellness
                enthusiasts, our mission is to create a simple yet powerful tool
                that makes habit formation and tracking an effortless
                experience. We understand the challenges of building new habits
                and breaking old ones, so we’ve crafted a system that is not
                only user-friendly but also highly effective in helping you stay
                on track. Our Habit Tracker System provides a comprehensive
                platform where users can easily set, monitor, and analyze their
                habits. Whether you're aiming to improve your health, boost
                productivity, or foster new skills, our app offers customizable
                features that cater to your unique journey. With data-driven
                insights, reminders, and motivational feedback, we ensure that
                you stay engaged and committed to your goals. We are committed
                to continuous improvement and innovation, always listening to
                our users and refining our system to better serve your needs.
                Our vision is to create a community of motivated individuals who
                support each other in their quest for personal development. Join
                us on this journey of self-improvement and start building the
                life you’ve always envisioned, one habit at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
