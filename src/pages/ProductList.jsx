import { Link, useSearchParams } from 'react-router-dom'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'
import { useShop } from '../context/ShopContext'
import { catalog } from '../data/storeContent'

const sidebarSliderSettings = {
  autoplay: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const products = catalog

const categories = [
  'Fashion & Clothing',
  'Electronics & Gadgets',
  'Home & Living',
  'Sports & Fitness',
  'Beauty & Personal Care',
  'Kids & Babies',
]

const brands = ['NexBrand', 'LuxeWear', 'TechPro', 'StyleCo', 'EliteFit', 'UrbanEdge']

const tags = ['Fashion', 'Electronics', 'Clothing', 'Gadgets', 'Beauty', 'Sports', 'Luxury', 'Sale', 'New Arrivals', 'Trending', 'Premium', 'Exclusive']

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', active: true },
]

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || '')
  const { addToCart, addToWishlist } = useShop()
  const view = searchParams.get('view') || 'grid'
  const activeCategory = searchParams.get('category') || ''
  const activeBrand = searchParams.get('brand') || ''
  const activeTag = searchParams.get('tag') || ''
  const sort = searchParams.get('sort') || 'default'
  const currentPage = Number(searchParams.get('page') || 1)
  const maxPrice = Number(searchParams.get('maxPrice') || 1000)
  const search = (searchParams.get('search') || '').toLowerCase()

  useEffect(() => {
    setSearchInput(searchParams.get('search') || '')
  }, [searchParams])

  const updateParams = (updates) => {
    const next = new URLSearchParams(searchParams)

    Object.entries(updates).forEach(([key, value]) => {
      const shouldReset = value === '' || value === 'default' || value === 1 || value === 1000
      if (shouldReset) {
        next.delete(key)
      } else {
        next.set(key, String(value))
      }
    })

    if (!Object.prototype.hasOwnProperty.call(updates, 'page')) {
      next.delete('page')
    }

    setSearchParams(next)
  }

  let visibleProducts = products.filter((product) => {
    const matchesSearch = !search || product.name.toLowerCase().includes(search) || product.tags.some((tag) => tag.toLowerCase().includes(search))
    const matchesCategory = !activeCategory || product.category === activeCategory
    const matchesBrand = !activeBrand || product.brand === activeBrand
    const matchesTag = !activeTag || product.tags.includes(activeTag)
    const matchesPrice = product.price <= maxPrice

    return matchesSearch && matchesCategory && matchesBrand && matchesTag && matchesPrice
  })

  if (sort === 'price-low') {
    visibleProducts = [...visibleProducts].sort((first, second) => first.price - second.price)
  } else if (sort === 'price-high') {
    visibleProducts = [...visibleProducts].sort((first, second) => second.price - first.price)
  } else if (sort === 'rating') {
    visibleProducts = [...visibleProducts].sort((first, second) => second.id - first.id)
  }

  const itemsPerPage = view === 'list' ? 4 : 6
  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / itemsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedProducts = visibleProducts.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage)

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="product-list">
        <div className="container-fluid">
          <div className="row">
            {/* Product Grid */}
            <div className="col-lg-9">
              <div className="product-list-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-list-view">
                      <button type="button" className={view === 'grid' ? 'active' : ''} onClick={() => updateParams({ view: 'grid' })}><i className="fa fa-th-large"></i></button>
                      <button type="button" className={view === 'list' ? 'active' : ''} onClick={() => updateParams({ view: 'list' })}><i className="fa fa-th-list"></i></button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-list-sort">
                      <select className="custom-select" value={sort} onChange={(event) => updateParams({ sort: event.target.value })}>
                        <option value="default">Sort by: Default</option>
                        <option value="price-low">Sort by: Price (Low - High)</option>
                        <option value="price-high">Sort by: Price (High - Low)</option>
                        <option value="rating">Sort by: Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {paginatedProducts.map((p) => (
                  <div key={p.id} className={view === 'list' ? 'col-12' : 'col-lg-4 col-md-6'}>
                    <ProductCard {...p} />
                  </div>
                ))}
              </div>

              <div className="product-list-bottom">
                <ul className="pagination">
                  <li className={`page-item${safePage === 1 ? ' disabled' : ''}`}>
                    <button type="button" className="page-link" onClick={() => updateParams({ page: Math.max(1, safePage - 1) })}>&laquo;</button>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <li key={page} className={`page-item${safePage === page ? ' active' : ''}`}>
                      <button type="button" className="page-link" onClick={() => updateParams({ page })}>{page}</button>
                    </li>
                  ))}
                  <li className={`page-item${safePage === totalPages ? ' disabled' : ''}`}>
                    <button type="button" className="page-link" onClick={() => updateParams({ page: Math.min(totalPages, safePage + 1) })}>&raquo;</button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="sidebar">
                {/* Search */}
                <div className="sidebar-widget search">
                  <input type="text" placeholder="Search" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                  <button type="button" onClick={() => updateParams({ search: searchInput.trim() })}><i className="fa fa-search"></i></button>
                </div>

                {/* Category */}
                <div className="sidebar-widget category">
                  <h2 className="title">Category</h2>
                  <ul>
                    {categories.map((category) => (
                      <li key={category}>
                        <Link to={`/products?category=${encodeURIComponent(category)}`} className={activeCategory === category ? 'font-weight-bold' : ''}>
                          {category} <span>({products.filter((product) => product.category === category).length})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Range */}
                <div className="sidebar-widget price">
                  <h2 className="title">Filter By Price</h2>
                  <div className="price-ranger">
                    <input type="range" className="form-control-range" min="0" max="1000" value={maxPrice} onChange={(event) => updateParams({ maxPrice: Number(event.target.value) })} />
                    <div>
                      <span>$0</span> — <span>${maxPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Sidebar Slider Product */}
                <div className="sidebar-widget product">
                  <h2 className="title">Featured Products</h2>
                  <Slider {...sidebarSliderSettings}>
                    <div className="product-item">
                      <div className="product-title">
                        <Link to="/product-detail">{products[0].name}</Link>
                        <div className="ratting">
                          <i className="fa fa-star"></i><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="product-image">
                        <Link to="/product-detail"><img src="/img/product-1.jpg" alt="Product" /></Link>
                        <div className="product-action">
                          <Link to="/cart" onClick={() => addToCart(products[0])}><i className="fa fa-cart-plus"></i></Link>
                          <Link to="/wishlist" onClick={() => addToWishlist(products[0])}><i className="fa fa-heart"></i></Link>
                          <Link to="/product-detail"><i className="fa fa-search"></i></Link>
                        </div>
                      </div>
                      <div className="product-price">
                        <h3><span>$</span>{products[0].price}</h3>
                        <Link className="btn" to="/checkout" onClick={() => addToCart(products[0])}><i className="fa fa-shopping-cart"></i>Buy Now</Link>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="product-title">
                        <Link to="/product-detail">{products[2].name}</Link>
                        <div className="ratting">
                          <i className="fa fa-star"></i><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="product-image">
                        <Link to="/product-detail"><img src="/img/product-3.jpg" alt="Product" /></Link>
                        <div className="product-action">
                          <Link to="/cart" onClick={() => addToCart(products[2])}><i className="fa fa-cart-plus"></i></Link>
                          <Link to="/wishlist" onClick={() => addToWishlist(products[2])}><i className="fa fa-heart"></i></Link>
                          <Link to="/product-detail"><i className="fa fa-search"></i></Link>
                        </div>
                      </div>
                      <div className="product-price">
                        <h3><span>$</span>{products[2].price}</h3>
                        <Link className="btn" to="/checkout" onClick={() => addToCart(products[2])}><i className="fa fa-shopping-cart"></i>Buy Now</Link>
                      </div>
                    </div>
                  </Slider>
                </div>

                {/* Brands */}
                <div className="sidebar-widget brands">
                  <h2 className="title">Our Brands</h2>
                  <ul>
                    {brands.map((brand) => (
                      <li key={brand}>
                        <Link to={`/products?brand=${encodeURIComponent(brand)}`} className={activeBrand === brand ? 'font-weight-bold' : ''}>{brand}</Link>
                        <span>({products.filter((product) => product.brand === brand).length})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="sidebar-widget tag">
                  <h2 className="title">Tags Cloud</h2>
                  {tags.map((tag) => (
                    <Link key={tag} to={`/products?tag=${encodeURIComponent(tag)}`} className={activeTag === tag ? 'font-weight-bold' : ''}>{tag}</Link>
                  ))}
                </div>

                <div className="sidebar-widget category">
                  <h2 className="title">Quick Actions</h2>
                  <ul>
                    <li><button type="button" className="btn btn-link p-0" onClick={() => {
                      setSearchInput('')
                      setSearchParams(new URLSearchParams())
                    }}>Clear all filters</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Slider */}
      <div className="brand">
        <div className="container-fluid">
          <div className="brand-slider">
            <Slider speed={5000} autoplay autoplaySpeed={0} cssEase="linear" slidesToShow={5} slidesToScroll={1} infinite swipeToSlide centerMode arrows={false} dots={false}>
              <div className="brand-item"><img src="/img/brand-1.png" alt="" /></div>
              <div className="brand-item"><img src="/img/brand-2.png" alt="" /></div>
              <div className="brand-item"><img src="/img/brand-3.png" alt="" /></div>
              <div className="brand-item"><img src="/img/brand-4.png" alt="" /></div>
              <div className="brand-item"><img src="/img/brand-5.png" alt="" /></div>
              <div className="brand-item"><img src="/img/brand-6.png" alt="" /></div>
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  )
}
