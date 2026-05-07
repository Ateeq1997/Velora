import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { useShop } from '../context/ShopContext'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Cart', active: true },
]

export default function Cart() {
  const { cartItems, updateCartQty, removeFromCart } = useShop()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 10
  const total = cartItems.length ? subtotal + shipping : 0

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-page-inner">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      {cartItems.map(item => (
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
                              <button className="btn-minus" onClick={() => updateCartQty(item.id, -1)}>
                                <i className="fa fa-minus"></i>
                              </button>
                              <input type="text" value={item.qty} readOnly />
                              <button className="btn-plus" onClick={() => updateCartQty(item.id, 1)}>
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td>${item.price * item.qty}</td>
                          <td>
                            <button onClick={() => removeFromCart(item.id)}>
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {!cartItems.length && (
                        <tr>
                          <td colSpan="5" className="text-center py-4">
                            Your cart is empty. <Link to="/products">Browse the collection</Link>.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cart-page-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button>Apply Code</button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cart-summary">
                      <div className="cart-content">
                        <h1>Cart Summary</h1>
                        <p>Sub Total<span>${subtotal}</span></p>
                        <p>Shipping Cost<span>${shipping}</span></p>
                        <h2>Grand Total<span>${total}</span></h2>
                      </div>
                      <div className="cart-btn">
                        <button>Update Cart</button>
                        <Link to="/checkout"><button>Checkout</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
