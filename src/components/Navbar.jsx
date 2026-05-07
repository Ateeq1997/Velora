import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <div className="nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <button className="navbar-brand btn btn-link" onClick={() => setIsOpen(!isOpen)}>MENU</button>
          <button
            type="button"
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-between${isOpen ? ' show' : ''}`}>
            <div className="navbar-nav mr-auto">
              <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
              <Link to="/products" className={`nav-item nav-link ${isActive('/products')}`}>Products</Link>
              <Link to="/product-detail" className={`nav-item nav-link ${isActive('/product-detail')}`}>Product Detail</Link>
              <Link to="/cart" className={`nav-item nav-link ${isActive('/cart')}`}>Cart</Link>
              <Link to="/checkout" className={`nav-item nav-link ${isActive('/checkout')}`}>Checkout</Link>
              <Link to="/my-account" className={`nav-item nav-link ${isActive('/my-account')}`}>My Account</Link>
              <div className={`nav-item dropdown${moreOpen ? ' show' : ''}`}>
                <button
                  className={`nav-link dropdown-toggle btn btn-link ${['/wishlist','/login','/contact'].includes(location.pathname) ? 'active' : ''}`}
                  onClick={() => setMoreOpen(!moreOpen)}
                >
                  More Pages
                </button>
                <div className={`dropdown-menu${moreOpen ? ' show' : ''}`}>
                  <Link to="/wishlist" className="dropdown-item" onClick={() => setMoreOpen(false)}>Wishlist</Link>
                  <Link to="/login" className="dropdown-item" onClick={() => setMoreOpen(false)}>Login &amp; Register</Link>
                  <Link to="/contact" className="dropdown-item" onClick={() => setMoreOpen(false)}>Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="navbar-nav ml-auto">
              <div className={`nav-item dropdown${userOpen ? ' show' : ''}`}>
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  onClick={() => setUserOpen(!userOpen)}
                >
                  User Account
                </button>
                <div className={`dropdown-menu${userOpen ? ' show' : ''}`}>
                  <Link to="/login" className="dropdown-item" onClick={() => setUserOpen(false)}>Login</Link>
                  <Link to="/login" className="dropdown-item" onClick={() => setUserOpen(false)}>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
