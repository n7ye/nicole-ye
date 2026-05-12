import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

// ─── Pages ───────────────────────────────────────────────────────────
import AboutPage     from './pages/About'
import PortfolioPage from './pages/Portfolio'
import ResumePage    from './pages/Resume'
import CreativePage  from './pages/Creative'



// ─── Assets ──────────────────────────────────────────────────────────
import imgHeader    from './assets/captions5.png'
import imgCharacter from './assets/Speech1.png'
import imgLaptop    from './assets/Portfolio.png'
import imgTomato    from './assets/Tomato.png'
import imgCrayon    from './assets/Crayon.png'
import imgResume    from './assets/Resume.png'
import imgPhone     from './assets/Phone.png'
import imgNicole    from './assets/NicoleStill.png'
import imgGit       from './assets/Git.png'
import imgLink      from './assets/Link.png'
import imgMail      from './assets/Mail.png'

// ─── Clickable item (internal page) ──────────────────────────────────
function Item({ src, alt, className, to }) {
  const navigate = useNavigate()
  return (
    <div className={`item ${className}`} aria-label={alt}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={() => navigate(to)}
        style={{ cursor: 'pointer', pointerEvents: 'visiblePainted' }}
      />
    </div>
  )
}

// ─── Clickable item (external link) ──────────────────────────────────
function ExternalItem({ src, alt, className, href }) {
  return (
    <div className={`item ${className}`} aria-label={alt}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
        style={{ cursor: 'pointer', pointerEvents: 'visiblePainted' }}
      />
    </div>
  )
}

// ─── Landing page ─────────────────────────────────────────────────────
function Landing() {
  return (
    <div className="landing">
      <div className="scene">

        <div className="item item-header">
          <img src={imgHeader} alt="Nicole Ye" draggable={false} />
        </div>

        <Item src={imgNicole}    alt="About me"  className="item-nicole"    to="/about"     />
        <Item src={imgCharacter} alt="About me"  className="item-character" to="/about"     />
        <Item src={imgPhone}     alt="About me"    className="item-phone"     to="/about"   />
        <Item src={imgLaptop}    alt="Portfolio"  className="item-laptop"    to="/portfolio" />
        <div className="item item-tomato">
          <img src={imgTomato} alt="Fun stuff" draggable={false} />
        </div>
        <Item src={imgCrayon}    alt="Creative"   className="item-crayon"    to="/creative"  />
        <Item src={imgResume}    alt="Resume"     className="item-resume"    to="/resume"    />
       
        <ExternalItem src={imgGit}  alt="GitHub"   className="item-git"  href="https://github.com/yourusername"      />
        <ExternalItem src={imgLink} alt="LinkedIn" className="item-link" href="https://linkedin.com/in/yourusername" />
        <ExternalItem src={imgMail} alt="Email"    className="item-mail" href="mailto:n7ye@uwaterloo.ca"             />

      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Landing />}       />
        <Route path="/about"     element={<AboutPage />}     />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume"    element={<ResumePage />}    />
        <Route path="/creative"  element={<CreativePage />}  />
      </Routes>
    </BrowserRouter>
  )
}