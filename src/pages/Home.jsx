import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { contactDetails, featuredProductIds, recentProductIds, selectProducts } from '../data/storeContent'

const headerSliderSettings = {
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const productSlider4Settings = {
  autoplay: true,
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
}

const brandSliderSettings = {
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: false,
  arrows: false,
  dots: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } },
    { breakpoint: 300, settings: { slidesToShow: 1 } },
  ],
}

const featuredProducts = selectProducts(featuredProductIds)

const recentProducts = selectProducts(recentProductIds)

export default function Home() {
  return (
    <Layout>
      {/* Main Slider */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  <li className="nav-item"><Link className="nav-link" to="/"><i className="fa fa-home"></i>Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?tag=Premium"><i className="fa fa-shopping-bag"></i>Best Selling</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?tag=New%20Arrivals"><i className="fa fa-plus-square"></i>New Arrivals</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?category=Fashion%20%26%20Clothing"><i className="fa fa-female"></i>Fashion &amp; Beauty</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?category=Kids%20%26%20Babies"><i className="fa fa-child"></i>Kids &amp; Babies Clothes</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?category=Fashion%20%26%20Clothing"><i className="fa fa-tshirt"></i>Men &amp; Women Clothes</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?category=Electronics%20%26%20Gadgets"><i className="fa fa-mobile-alt"></i>Gadgets &amp; Accessories</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/products?category=Electronics%20%26%20Gadgets"><i className="fa fa-microchip"></i>Electronics &amp; Accessories</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-md-6">
              <div className="header-slider normal-slider">
                <Slider {...headerSliderSettings}>
                  <div className="header-slider-item">
                    <img src="/img/slider-1.jpg" alt="Slider 1" />
                    <div className="header-slider-caption">
                      <p>Curated fashion, statement accessories, and premium tech for a sharper everyday wardrobe</p>
                      <Link className="btn" to="/products"><i className="fa fa-shopping-cart"></i>Shop Now</Link>
                    </div>
                  </div>
                  <div className="header-slider-item">
                    <img src="/img/slider-2.jpg" alt="Slider 2" />
                    <div className="header-slider-caption">
                      <p>Fresh capsule drops land weekly, balancing clean silhouettes with standout utility</p>
                      <Link className="btn" to="/products"><i className="fa fa-shopping-cart"></i>Shop Now</Link>
                    </div>
                  </div>
                  <div className="header-slider-item">
                    <img src="/img/slider-3.jpg" alt="Slider 3" />
                    <div className="header-slider-caption">
                      <p>Shop limited-run pieces and design-led essentials before they disappear from the edit</p>
                      <Link className="btn" to="/products"><i className="fa fa-shopping-cart"></i>Shop Now</Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-3">
              <div className="header-img">
                <div className="img-item">
                  <img src="/img/category-1.jpg" alt="Category 1" />
                  <Link className="img-text" to="/products?category=Fashion%20%26%20Clothing">
                    <p>Exclusive Fashion Collection</p>
                  </Link>
                </div>
                <div className="img-item">
                  <img src="/img/category-2.jpg" alt="Category 2" />
                  <Link className="img-text" to="/products?category=Electronics%20%26%20Gadgets">
                    <p>Latest Tech Gadgets</p>
                  </Link>
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
            <Slider {...brandSliderSettings}>
              <div className="brand-item"><img src="/img/brand-1.png" alt="Brand 1" /></div>
              <div className="brand-item"><img src="/img/brand-2.png" alt="Brand 2" /></div>
              <div className="brand-item"><img src="/img/brand-3.png" alt="Brand 3" /></div>
              <div className="brand-item"><img src="/img/brand-4.png" alt="Brand 4" /></div>
              <div className="brand-item"><img src="/img/brand-5.png" alt="Brand 5" /></div>
              <div className="brand-item"><img src="/img/brand-6.png" alt="Brand 6" /></div>
            </Slider>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="feature">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fab fa-cc-mastercard"></i>
                <h2>Secure Payment</h2>
                <p>100% secure payment processing with encryption</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-truck"></i>
                <h2>Worldwide Delivery</h2>
                <p>Free shipping on orders over $50 worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-sync-alt"></i>
                <h2>90 Days Return</h2>
                <p>Hassle-free returns within 90 days of purchase</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-comments"></i>
                <h2>24/7 Support</h2>
                <p>Round-the-clock customer support team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="category">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="/img/category-3.jpg" alt="Category" />
                <Link className="category-name" to="/products?category=Fashion%20%26%20Clothing"><p>Women's Fashion</p></Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-250">
                <img src="/img/category-4.jpg" alt="Category" />
                <Link className="category-name" to="/products?category=Fashion%20%26%20Clothing"><p>Men's Collection</p></Link>
              </div>
              <div className="category-item ch-150">
                <img src="/img/category-5.jpg" alt="Category" />
                <Link className="category-name" to="/products?tag=Accessories"><p>Accessories</p></Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-150">
                <img src="/img/category-6.jpg" alt="Category" />
                <Link className="category-name" to="/products?category=Kids%20%26%20Babies"><p>Kids' Wear</p></Link>
              </div>
              <div className="category-item ch-250">
                <img src="/img/category-7.jpg" alt="Category" />
                <Link className="category-name" to="/products?category=Electronics%20%26%20Gadgets"><p>Electronics</p></Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="/img/category-8.jpg" alt="Category" />
                <Link className="category-name" to="/products?tag=Luxury"><p>Luxury Goods</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Book a private styling or gifting consult</h1>
            </div>
            <div className="col-md-6">
              <a href="tel:+13235550148">{contactDetails.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Featured Products</h1>
          </div>
          <div className="product-slider product-slider-4">
            <Slider {...productSlider4Settings}>
              {featuredProducts.map((p) => (
                <div key={p.id} className="product-slider-item">
                  <ProductCard {...p} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>Get first access to capsule drops</h1>
            </div>
            <div className="col-md-6">
              <div className="form">
                <input type="email" defaultValue="" placeholder="Enter your email for launch notes" />
                <button>Join the List</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="recent-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Recent Products</h1>
          </div>
          <div className="product-slider product-slider-4">
            <Slider {...productSlider4Settings}>
              {recentProducts.map((p) => (
                <div key={p.id} className="product-slider-item">
                  <ProductCard {...p} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  )
}
