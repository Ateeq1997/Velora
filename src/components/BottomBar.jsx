import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useShop } from '../context/ShopContext'

export default function BottomBar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const { cartCount, wishlistCount } = useShop()

  const handleSearch = () => {
    const value = search.trim()
    navigate(value ? `/products?search=${encodeURIComponent(value)}` : '/products')
  }

  return (
    <div className="bottom-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">
              <Link to="/">
                <img src="/aurevia-logo.svg" alt="Aurevia Logo" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch()
                  }
                }}
              />
              <button type="button" onClick={handleSearch}><i className="fa fa-search"></i></button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="user">
              <Link to="/wishlist" className="btn wishlist">
                <i className="fa fa-heart"></i>
                <span>({wishlistCount})</span>
              </Link>
              <Link to="/cart" className="btn cart">
                <i className="fa fa-shopping-cart"></i>
                <span>({cartCount})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
