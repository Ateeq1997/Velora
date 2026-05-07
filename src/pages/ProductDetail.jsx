import { useState, useRef } from 'react'
import Slider from 'react-slick'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'
import { useShop } from '../context/ShopContext'
import { productDetailContent, relatedProductIds, selectProducts } from '../data/storeContent'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Product Detail', active: true },
]

const productSlider3Settings = {
  autoplay: true,
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
}

const reviewSliderSettings = {
  autoplay: true,
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
}

const relatedProducts = selectProducts(relatedProductIds)

const productImages = [
  '/img/product-1.jpg',
  '/img/product-3.jpg',
  '/img/product-5.jpg',
  '/img/product-7.jpg',
  '/img/product-9.jpg',
  '/img/product-10.jpg',
]

export default function ProductDetail() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') || 'description'
  const [qty, setQty] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Black')
  const { addToCart, addToWishlist } = useShop()
  const mainSliderRef = useRef(null)
  const navSliderRef = useRef(null)

  const currentProduct = {
    ...selectProducts([productDetailContent.productId])[0],
    price: 149,
    size: selectedSize,
    color: selectedColor,
  }

  const setActiveTab = (tab) => {
    const next = new URLSearchParams(searchParams)
    if (tab === 'description') {
      next.delete('tab')
    } else {
      next.set('tab', tab)
    }
    setSearchParams(next)
  }

  const mainSettings = {
    infinite: true, autoplay: true, dots: false, fade: true,
    slidesToShow: 1, slidesToScroll: 1,
    asNavFor: navSliderRef.current,
  }

  const navSettings = {
    slidesToShow: 3, slidesToScroll: 1, dots: false,
    centerMode: true, focusOnSelect: true,
    asNavFor: mainSliderRef.current,
  }

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="product-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-detail-top">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="product-slider-single normal-slider">
                      <Slider ref={mainSliderRef} {...mainSettings}>
                        {productImages.map((img, i) => (
                          <img key={i} src={img} alt="Product" />
                        ))}
                      </Slider>
                    </div>
                    <div className="product-slider-single-nav normal-slider">
                      <Slider ref={navSliderRef} {...navSettings}>
                        {productImages.map((img, i) => (
                          <div key={i} className="slider-nav-img"><img src={img} alt="Thumb" /></div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="product-content">
                      <div className="title"><h2>{currentProduct.name}</h2></div>
                      <div className="ratting">
                        <i className="fa fa-star"></i><i className="fa fa-star"></i>
                        <i className="fa fa-star"></i><i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <h4>Price:</h4>
                        <p>${currentProduct.price} <span>${productDetailContent.originalPrice}</span></p>
                      </div>
                      <div className="quantity">
                        <h4>Quantity:</h4>
                        <div className="qty">
                          <button className="btn-minus" onClick={() => setQty(q => Math.max(0, q - 1))}>
                            <i className="fa fa-minus"></i>
                          </button>
                          <input type="text" value={qty} onChange={(e) => setQty(parseInt(e.target.value) || 0)} />
                          <button className="btn-plus" onClick={() => setQty(q => q + 1)}>
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="p-size">
                        <h4>Size:</h4>
                        <div className="btn-group btn-group-sm">
                          {['S', 'M', 'L', 'XL'].map((size) => (
                            <button key={size} type="button" className={`btn${selectedSize === size ? ' active' : ''}`} onClick={() => setSelectedSize(size)}>{size}</button>
                          ))}
                        </div>
                      </div>
                      <div className="p-color">
                        <h4>Color:</h4>
                        <div className="btn-group btn-group-sm">
                          {['White', 'Black', 'Blue'].map((color) => (
                            <button key={color} type="button" className={`btn${selectedColor === color ? ' active' : ''}`} onClick={() => setSelectedColor(color)}>{color}</button>
                          ))}
                        </div>
                      </div>
                      <div className="action">
                        <Link className="btn" to="/cart" onClick={() => addToCart(currentProduct, qty)}><i className="fa fa-shopping-cart"></i>Add to Cart</Link>
                        <button type="button" className="btn" onClick={() => {
                          addToWishlist(currentProduct, 1)
                          navigate('/wishlist')
                        }}><i className="fa fa-heart"></i>Add to Wishlist</button>
                        <Link className="btn" to="/checkout" onClick={() => addToCart(currentProduct, qty)}><i className="fa fa-shopping-bag"></i>Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Tabs */}
              <div className="row product-detail-bottom">
                <div className="col-lg-12">
                  <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <button type="button" className={`nav-link${activeTab === 'description' ? ' active' : ''}`}
                        onClick={() => setActiveTab('description')}>Description</button>
                    </li>
                    <li className="nav-item">
                      <button type="button" className={`nav-link${activeTab === 'specification' ? ' active' : ''}`}
                        onClick={() => setActiveTab('specification')}>Specification</button>
                    </li>
                    <li className="nav-item">
                      <button type="button" className={`nav-link${activeTab === 'reviews' ? ' active' : ''}`}
                        onClick={() => setActiveTab('reviews')}>Reviews (1)</button>
                    </li>
                  </ul>

                  <div className="tab-content">
                    {activeTab === 'description' && (
                      <div className="container tab-pane active">
                        <h4>Product Description</h4>
                        <p>{productDetailContent.description}</p>
                      </div>
                    )}
                    {activeTab === 'specification' && (
                      <div className="container tab-pane active">
                        <h4>Product Specification</h4>
                        <ul>
                          {productDetailContent.specifications.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {activeTab === 'reviews' && (
                      <div className="container tab-pane active">
                        <div className="reviews-submitted">
                          <div className="reviewer">{productDetailContent.submittedReview.reviewer} — <span>{productDetailContent.submittedReview.date}</span></div>
                          <div className="ratting">
                            <i className="fa fa-star"></i><i className="fa fa-star"></i>
                            <i className="fa fa-star"></i><i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>{productDetailContent.submittedReview.text}</p>
                        </div>
                        <div className="reviews-submit">
                          <h4>Give your Review:</h4>
                          <div className="ratting">
                            <i className="far fa-star"></i><i className="far fa-star"></i>
                            <i className="far fa-star"></i><i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <div className="row form">
                            <div className="col-sm-6"><input type="text" placeholder="Name" /></div>
                            <div className="col-sm-6"><input type="email" placeholder="Email" /></div>
                            <div className="col-sm-12"><textarea placeholder="Review"></textarea></div>
                            <div className="col-sm-12"><button type="button">Submit</button></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Related Products */}
              <div className="product">
                <div className="section-header"><h1>Related Products</h1></div>
                <div className="product-slider product-slider-3">
                  <Slider {...productSlider3Settings}>
                    {relatedProducts.map((p) => (
                      <div key={p.id} className="product-slider-item">
                        <ProductCard {...p} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Reviews Slider */}
              <div className="review">
                <div className="section-header"><h1>Our Reviews</h1></div>
                <div className="review-slider">
                  <Slider {...reviewSliderSettings}>
                    {productDetailContent.carouselReviews.map((review) => (
                    <div key={review.author} className="review-slider-item">
                      <div className="review-img">
                        <img src="/img/user.jpg" alt="Reviewer" />
                      </div>
                      <div className="review-text">
                        <div className="ratting">
                          <i className="fa fa-star"></i><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i><i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>"{review.quote}"</p>
                        <h3>— {review.author}</h3>
                      </div>
                    </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget search">
                  <input type="text" placeholder="Search" />
                  <button><i className="fa fa-search"></i></button>
                </div>
                <div className="sidebar-widget category">
                  <h2 className="title">Category</h2>
                  <ul>
                    <li><Link to="/products?category=Fashion%20%26%20Clothing">Fashion &amp; Clothing <span>(45)</span></Link></li>
                    <li><Link to="/products?category=Electronics%20%26%20Gadgets">Electronics &amp; Gadgets <span>(34)</span></Link></li>
                    <li><Link to="/products?category=Home%20%26%20Living">Home &amp; Living <span>(67)</span></Link></li>
                    <li><Link to="/products?category=Sports%20%26%20Fitness">Sports &amp; Fitness <span>(74)</span></Link></li>
                    <li><Link to="/products?category=Beauty%20%26%20Personal%20Care">Beauty &amp; Care <span>(89)</span></Link></li>
                    <li><Link to="/products?category=Kids%20%26%20Babies">Kids &amp; Babies <span>(28)</span></Link></li>
                  </ul>
                </div>
                <div className="sidebar-widget brands">
                  <h2 className="title">Our Brands</h2>
                  <ul>
                    <li><Link to="/products?brand=NexBrand">NexBrand</Link><span>(45)</span></li>
                    <li><Link to="/products?brand=LuxeWear">LuxeWear</Link><span>(34)</span></li>
                    <li><Link to="/products?brand=TechPro">TechPro</Link><span>(67)</span></li>
                    <li><Link to="/products?brand=StyleCo">StyleCo</Link><span>(74)</span></li>
                    <li><Link to="/products?brand=EliteFit">EliteFit</Link><span>(89)</span></li>
                    <li><Link to="/products?brand=UrbanEdge">UrbanEdge</Link><span>(28)</span></li>
                  </ul>
                </div>
                <div className="sidebar-widget tag">
                  <h2 className="title">Tags Cloud</h2>
                  <Link to="/products?tag=Fashion">Fashion</Link><Link to="/products?tag=Electronics">Electronics</Link>
                  <Link to="/products?tag=Clothing">Clothing</Link><Link to="/products?tag=Gadgets">Gadgets</Link>
                  <Link to="/products?tag=Beauty">Beauty</Link><Link to="/products?tag=Sports">Sports</Link>
                  <Link to="/products?tag=Luxury">Luxury</Link><Link to="/products?tag=Sale">Sale</Link>
                  <Link to="/products?tag=New%20Arrivals">New Arrivals</Link><Link to="/products?tag=Trending">Trending</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
