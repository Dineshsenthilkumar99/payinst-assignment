import './index.css'

const Header = () => (
  <nav className="navbar">
    <ul className="nav-list-container">
      <li className="nav-item">Home</li>
      <li className="nav-item">About</li>
      <li className="nav-item">Schedules</li>
      <li className="nav-item">Membership</li>
      <li className="nav-item">Pricing</li>
    </ul>
    <div className="offers-courses-container">
      <p className="offer">Offers</p>
      <div className="courses-container">
        <p className="courses">Courses</p>
      </div>
    </div>
  </nav>
)

export default Header
