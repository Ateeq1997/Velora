import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { useShop } from '../context/ShopContext'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Wishlist', active: true },
]

export default function Wishlist() {
  const { wishlistItems, updateWishlistQty, removeFromWishlist, moveWishlistItemToCart } = useShop()

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="wishlist-page">
        <div className="container-fluid">
          <div className="wishlist-page-inner">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Add to Cart</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      {wishlistItems.map(item => (
                        <tr key={item.id}>
                          <td>
                            <div className="img">
                              <Link to="/product-detail"><img src={item.image} alt={item.name} /></Link>
                              <p>{item.name}</p>
                            </div>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <div className="qty">
                              <button className="btn-minus" onClick={() => updateWishlistQty(item.id, -1)}>
                                <i className="fa fa-minus"></i>
                              </button>
                              <input type="text" value={item.qty} readOnly />
                              <button className="btn-plus" onClick={() => updateWishlistQty(item.id, 1)}>
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <Link to="/cart" className="btn-cart" onClick={() => moveWishlistItemToCart(item)}>Add to Cart</Link>
                          </td>
                          <td>
                            <button onClick={() => removeFromWishlist(item.id)}>
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {!wishlistItems.length && (
                        <tr>
                          <td colSpan="5" className="text-center py-4">
                            Your wishlist is empty. <Link to="/products">Save something from the shop</Link>.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
