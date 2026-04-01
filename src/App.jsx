
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

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            New: AI-Powered Tools Available
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Supercharge Your
            <br />
            Digital Workflow
          </h2>
          <p className="mt-5 max-w-xl text-slate-600">
            Access premium AI tools, design assets, templates, and productivity software
            all in one place. Start creating faster today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg brand-bg">
              Explore Products
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-white px-6 py-3 text-sm font-semibold text-indigo-700">
              <img src={playIcon} alt="Play" className="h-4 w-4" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="hero-glow absolute inset-0 blur-2xl" />
          <img
            className="relative z-10 h-full min-h-[280px] w-full rounded-3xl object-cover shadow-2xl"
            src={heroBanner}
            alt="Digital tools in action"
          />
        </div>
      </section>
    </div>
  )
}

export default App
