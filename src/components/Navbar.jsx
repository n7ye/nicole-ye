import './Navbar.css'
import { NavLink } from 'react-router-dom'
import navHome      from '../assets/buttons/home.png'
import navAbout     from '../assets/buttons/about.png'
import navPortfolio from '../assets/buttons/portfolio.png'
import navResume    from '../assets/buttons/resume.png'
import navCreative  from '../assets/buttons/creative.png'

const links = [
  { to: '/',          img: navHome,      alt: 'Home',      tilt: 'tilt-left'  },
  { to: '/about',     img: navAbout,     alt: 'About',     tilt: 'tilt-right' },
  { to: '/portfolio', img: navPortfolio, alt: 'Portfolio', tilt: 'tilt-left'  },
  { to: '/resume',    img: navResume,    alt: 'Resume',    tilt: 'tilt-right' },
  { to: '/creative',  img: navCreative,  alt: 'Creative',  tilt: 'tilt-left'  },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      {links.map(({ to, img, alt, tilt }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-btn ${tilt}` + (isActive ? ' nav-btn-active' : '')}
        >
          <img src={img} alt={alt} draggable={false} />
        </NavLink>
      ))}
    </nav>
  )
}