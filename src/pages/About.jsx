import Navbar from '../components/Navbar'

export default function AboutPage() {
  return (
    <div className="page-layout">
      <Navbar />

      <div className="page-content">
        <h1>Hi I'm Nicole!</h1>

        <p>
          I'm an <b>Electrical Engineering student</b> at the{' '}
          <b>University of Waterloo</b>, passionate about building systems
          that bridge the digital and physical worlds. My interests include
          embedded systems, PCB design, and high-speed digital design. I enjoy
          working on hands-on projects—from robots to custom PCBs. I am always
          eager to learn new skills and technologies!
        </p>

        <br />

        <h2>My Toolbox</h2>
        <ul>
          <li>
            KiCad — designed basic PCBs and learned schematic + layout workflow
          </li>
          <li>
            LTspice — simulated simple analog circuits (RC filters, voltage
            dividers)
          </li>
          <li>
            ESP32/Arduino — built small embedded projects using C/C++
          </li>
          <li>
            Solidworks/Onshape — designed mechanical components and assemblies
          </li>
        </ul>

        <p>
          Feel free to explore my portfolio and resume to see some of the
          projects I've worked on. If you'd like to connect or collaborate,
          don't hesitate to reach out via email or LinkedIn — I will always
          reply!
        </p>

        <br />

        <h2>More Yap</h2>

        <p>Outside of engineering, I love:</p>
        <ul>
          <li>Indoor and Beach Volleyball</li>
          <li>Making art (ask me about painting and dioramas)</li>
          <li>Reading (I always want book recs)</li>
          <li>Good food!</li>
        </ul>

       <h2>About this site</h2>

<p>
  This website is still under construction, but I wanted to share it as a work in progress!
  I built this website from scratch using Node.js, React, and CSS.
  I designed and developed the site myself to create a space that feels
  personal, interactive, and handcrafted. The inspiration for this website came from my love of physical media.
  I wanted the site to feel like a little digital diorama of my work and
  interests, where each project is its own compartment to explore. I hope this site gives you a glimpse into who I am and what I'm
  passionate about!
</p>
      </div>
    </div>
  )
}
