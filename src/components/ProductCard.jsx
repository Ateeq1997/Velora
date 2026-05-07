import { Link } from 'react-router-dom'

import { useShop } from '../context/ShopContext'
import { getProductPath } from '../data/storeContent'

export default function ProductCard({ id, image, name, price }) {
  const { addToCart, addToWishlist } = useShop()
  const product = { id, image, name, price }
  const productPath = getProductPath(id)

  return (
    <div className="product-item">
      <div className="product-title">
        <Link to={productPath}>{name || 'Product Name'}</Link>
        <div className="ratting">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      </div>
      <div className="product-image">
        <Link to={productPath}>
          <img src={image} alt="Product Image" />
        </Link>
        <div className="product-action">
          <Link to="/cart" aria-label="Add to cart" onClick={() => addToCart(product)}><i className="fa fa-cart-plus"></i></Link>
          <Link to="/wishlist" aria-label="Add to wishlist" onClick={() => addToWishlist(product)}><i className="fa fa-heart"></i></Link>
          <Link to={productPath} aria-label="View details"><i className="fa fa-search"></i></Link>
        </div>
      </div>
      <div className="product-price">
        <h3><span>$</span>{price || 99}</h3>
        <Link className="btn" to="/checkout" onClick={() => addToCart(product)}><i className="fa fa-shopping-cart"></i>Buy Now</Link>
      </div>
    </div>
  )
}
