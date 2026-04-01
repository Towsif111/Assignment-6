
import './App.css'
import playIcon from './assets/Play.png'
import heroBanner from './assets/banner.png'

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="topbar-inner" aria-label="Main navigation">
          <h1 className="brand">DigiTools</h1>

          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item}>
                <a href="#" className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="actions">
            <button className="icon-button" aria-label="Open cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L21 7H7" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </button>
            <button className="login-button">Login</button>
            <button className="cta-button">Get Started</button>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-badge">
            New: AI-Powered Tools Available
          </p>
          <h2 className="hero-title text-slate-900">
            Supercharge Your
            <br />
            Digital Workflow
          </h2>
          <p className="hero-description">
            Access premium AI tools, design assets, templates, and productivity software
            all in one place. Start creating faster today.
          </p>
          <div className="hero-actions">
            <button className="hero-btn-primary brand-bg">
              Explore Products
            </button>
            <button className="hero-btn-secondary">
              <img src={playIcon} alt="Play" className="h-4 w-4" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-media relative">
          <div className="hero-glow absolute inset-0 blur-2xl" />
          <img
            className="hero-image relative z-10 w-full object-cover shadow-2xl"
            src={heroBanner}
            alt="Digital tools in action"
          />
        </div>
      </section>
    </div>
  )
}

export default App
