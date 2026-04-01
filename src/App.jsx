
import { useRef, useState } from 'react'
import './App.css'
import playIcon from './assets/Play.png'
import heroBanner from './assets/banner.png'
import productsData from './data/products.json'
import writingIcon from './assets/products/writing_2327400 1.png'
import designToolIcon from './assets/products/design-tool.png'
import portfolioIcon from './assets/products/portfolio.png'
import operationIcon from './assets/products/operation.png'
import socialMediaIcon from './assets/products/social-media.png'
import cartIcon from './assets/products/shopping-cart.png'
import packageIcon from './assets/package.png'
import rocketIcon from './assets/rocket.png'
import userIcon from './assets/user.png'

const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

const productIcons = {
  1: writingIcon,
  2: designToolIcon,
  3: portfolioIcon,
  4: operationIcon,
  5: packageIcon,
  6: socialMediaIcon,
  7: rocketIcon,
  8: userIcon,
  9: cartIcon,
}

function App() {
  const [activeView, setActiveView] = useState('products')
  const [cartItems, setCartItems] = useState([])
  const [addedProductId, setAddedProductId] = useState(null)
  const cartCounterRef = useRef(1)

  const handleAddToCart = (product) => {
    const cartItemId = `${product.id}-${cartCounterRef.current}`
    cartCounterRef.current += 1

    setCartItems((prev) => [...prev, { ...product, cartItemId }])
    setAddedProductId(product.id)
  }

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId))
  }

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
            <button
              className="icon-button"
              aria-label="Open cart"
              onClick={() => setActiveView('cart')}
            >
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
            <button className="hero-btn-primary brand-bg" onClick={() => setActiveView('products')}>
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

      <section className="brand-bg text-white stats-band">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 px-4 py-9 text-center sm:px-6">
          <div>
            <p className="text-4xl font-black">50K+</p>
            <p className="text-sm text-white/80">Active Users</p>
          </div>
          <div className="border-x border-white/20">
            <p className="text-4xl font-black">200+</p>
            <p className="text-sm text-white/80">Premium Tools</p>
          </div>
          <div>
            <p className="text-4xl font-black">4.9</p>
            <p className="text-sm text-white/80">Rating</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="products">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black text-slate-900">Premium Digital Tools</h2>
          <p className="mt-3 text-slate-600">
            Choose from our curated collection of premium digital products designed to
            boost your productivity and creativity.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                activeView === 'products' ? 'brand-bg text-white' : 'text-slate-700'
              }`}
              onClick={() => setActiveView('products')}
            >
              Products
            </button>
            <button
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                activeView === 'cart' ? 'brand-bg text-white' : 'text-slate-700'
              }`}
              onClick={() => setActiveView('cart')}
            >
              {cartItems.length > 0 ? `Cart (${cartItems.length})` : 'Cart'}
            </button>
          </div>
        </div>

        {activeView === 'products' ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productsData.map((product) => (
              <article
                key={product.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 p-2">
                    <img
                      src={productIcons[product.id]}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {product.tagType}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 min-h-12 text-sm text-slate-600">{product.description}</p>
                <p className="mt-4 text-3xl font-black text-slate-900">
                  ${product.price}
                  <span className="ml-1 text-sm font-medium text-slate-500">/{product.period}</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {product.tag}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-5 w-full rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg brand-bg"
                  onClick={() => handleAddToCart(product)}
                >
                  {addedProductId === product.id ? 'Added to Cart' : 'Buy Now'}
                </button>
              </article>
            ))}
          </div>
        ) : (
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-4xl font-extrabold text-slate-900">Your Cart</h3>

            {cartItems.length === 0 ? (
              <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
                Your cart is empty.
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="flex flex-col items-start justify-between gap-4 rounded-xl bg-slate-100 px-5 py-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                        <img
                          src={productIcons[item.id]}
                          alt={item.name}
                          className="h-7 w-7 object-contain"
                        />
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-600">${item.price}</p>
                      </div>
                    </div>
                    <button
                      className="text-sm font-semibold text-pink-600"
                      onClick={() => handleRemoveFromCart(item.cartItemId)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  )
}

export default App
