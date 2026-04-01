
import { useRef, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
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

const steps = [
  {
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userIcon,
  },
  {
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: packageIcon,
  },
  {
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketIcon,
  },
]

const pricingPlans = [
  {
    subtitle: 'Perfect for getting started',
    name: 'Starter',
    price: 0,
    period: 'month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    highlighted: false,
    badge: '',
  },
  {
    subtitle: 'Best for professionals',
    name: 'Pro',
    price: 29,
    period: 'month',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    subtitle: 'For teams and businesses',
    name: 'Enterprise',
    price: 99,
    period: 'month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    badge: '',
  },
]

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
    toast.success(`${product.name} added to cart`)
  }

  const handleRemoveFromCart = (cartItemId) => {
    const removedItem = cartItems.find((item) => item.cartItemId === cartItemId)
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId))
    if (removedItem) {
      toast.info(`${removedItem.name} removed from cart`)
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info('Your cart is already empty')
      return
    }

    setCartItems([])
    setAddedProductId(null)
    toast.success('Proceeding to checkout... cart cleared')
  }

  const cartTotal = cartItems.reduce((total, item) => total + Number(item.price), 0)

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
              className="icon-button relative"
              aria-label="Open cart"
              onClick={() => setActiveView('cart')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.5L21 7H7" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              {cartItems.length > 0 ? (
                <span className="absolute -right-2 -top-2 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  {cartItems.length}
                </span>
              ) : null}
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
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productsData.map((product) => (
              <article
                key={product.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 p-2">
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
                <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 min-h-12 text-sm text-slate-600">{product.description}</p>
                <p className="mt-3 text-2xl font-black text-slate-900">
                  ${product.price}
                  <span className="ml-1 text-sm font-medium text-slate-500">/{product.period}</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {product.tag}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-emerald-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-4 w-full rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg brand-bg"
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

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-slate-700">
                    <p className="text-sm font-semibold">Total selected products</p>
                    <p className="text-sm font-semibold">{cartItems.length}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-slate-900">
                    <p className="text-base font-bold">Total Price</p>
                    <p className="text-xl font-black">${cartTotal}</p>
                  </div>
                  <button
                    className="mt-4 w-full rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg brand-bg"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black text-slate-900">Get Started In 3 Steps</h2>
          <p className="mt-2 text-center text-slate-500">
            Start using premium digital tools in minutes, not hours.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="relative min-h-80 rounded-2xl border border-slate-200 bg-white px-6 pb-8 pt-8 text-center"
              >
                <p className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                  0{index + 1}
                </p>
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-2xl">
                  <img src={step.icon} alt={step.title} className="h-9 w-9 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8" id="pricing">
        <h2 className="text-center text-4xl font-black text-slate-900">Simple, Transparent Pricing</h2>
        <p className="mt-2 text-center text-slate-600">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${
                plan.highlighted
                  ? 'brand-bg border-indigo-500 text-white shadow-2xl'
                  : 'border-slate-200 bg-white text-slate-900 shadow-sm'
              }`}
            >
              {plan.badge ? (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-700">
                  {plan.badge}
                </span>
              ) : null}
              <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                {plan.subtitle}
              </p>
              <h3 className="mt-1 text-2xl font-black">{plan.name}</h3>
              <p className="mt-4 text-5xl font-black">
                ${plan.price}
                <span className="text-base font-medium">/{plan.period}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold ${
                  plan.highlighted
                    ? 'bg-white text-indigo-700'
                    : 'brand-bg text-white shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-6 lg:px-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black text-white">DigiTools</h3>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              Premium digital tools for creators,
              <br />professionals, and businesses. Work
              smarter <br />with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Social Links</h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900"
              >
                <i className="fa-brands fa-square-x-twitter" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900"
              >
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 px-4 py-5 text-xs text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:px-6 md:flex-row lg:px-8">
            <p>© 2026 DigiTools. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-slate-300">
                Terms of Service
              </a>
              <a href="#" className="transition hover:text-slate-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
