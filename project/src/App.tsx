import React from "react"
import { ThemeSwitcher } from "./components/ThemeSwitcher"

export default function App() {
  return (
    <>
      <ThemeSwitcher
        render={(isThemeDark, handleThemeChange) => (
          <div
            style={{
              width: '97vw',
              height: '95vh',
              background: isThemeDark ? '#333' : '#fff',
              color: isThemeDark ? '#fff' : '#000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            {/* Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1>Charbaxgram Demo</h1>
              {/* Button to toggle between dark and light theme */}
              <button onClick={handleThemeChange}>
                {isThemeDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </header>

            {/* Navigation */}
            <nav style={{ margin: '20px 0' }}>
              <a href="#about" style={linkStyle}>About</a>
              <a href="#services" style={linkStyle}>Services</a>
              <a href="#contact" style={linkStyle}>Contact</a>
            </nav>

            {/* Main Content */}
            <main style={{ flex: 1 }}>
              <section id="about" style={sectionStyle}>
                <h2>About Us</h2>
                <p>Learn more about our company, mission, and values.</p>
              </section>

              <section id="services" style={sectionStyle}>
                <h2>Our Services</h2>
                <p>Discover the wide range of services we offer to our clients.</p>
              </section>

              <section id="contact" style={sectionStyle}>
                <h2>Contact Us</h2>
                <p>Get in touch with us for more information or inquiries.</p>
              </section>
            </main>

            {/* Footer */}
            <footer style={{ textAlign: 'center', marginTop: '20px' }}>
              <p>© 2024 Charbaxgram. All rights reserved.</p>
            </footer>
          </div>
        )}
      />
    </>
  )
}

/**
 * Link style used for navigation links.
 * @type {React.CSSProperties}
 */
const linkStyle: React.CSSProperties = {
  marginRight: '15px',
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
}

/**
 * Section style used for content sections.
 * @type {React.CSSProperties}
 */
const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
}
