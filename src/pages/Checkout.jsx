import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { useShop } from '../context/ShopContext'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Checkout', active: true },
]

const paymentMethods = [
  { id: 'payment-1', label: 'PayPal', desc: 'Pay securely using your PayPal account. You will be redirected to PayPal to complete your purchase.' },
  { id: 'payment-2', label: 'Payoneer', desc: 'Fast and secure payments with Payoneer. Transfer funds directly from your Payoneer account.' },
  { id: 'payment-3', label: 'Check Payment', desc: 'Pay by check. Please make your check payable to Aurevia Studio and mail it to our billing address.' },
  { id: 'payment-4', label: 'Direct Bank Transfer', desc: 'Transfer directly from your bank account. Contact us for our banking details after placing the order.' },
]

export default function Checkout() {
  const [shipToDifferent, setShipToDifferent] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)
  const { cartItems } = useShop()
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = cartItems.length > 0 ? 10 : 0
  const total = subtotal + shipping

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="checkout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-inner">
                <div className="billing-address">
                  <h2>Billing Address</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input className="form-control" type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input className="form-control" type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6">
                      <label>E-mail</label>
                      <input className="form-control" type="email" placeholder="E-mail" />
                    </div>
                    <div className="col-md-6">
                      <label>Mobile No</label>
                      <input className="form-control" type="tel" placeholder="Mobile No" />
                    </div>
                    <div className="col-md-12">
                      <label>Address</label>
                      <input className="form-control" type="text" placeholder="Address" />
                    </div>
                    <div className="col-md-6">
                      <label>Country</label>
                      <select className="custom-select">
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                      <input className="form-control" type="text" placeholder="City" />
                    </div>
                    <div className="col-md-6">
                      <label>State</label>
                      <input className="form-control" type="text" placeholder="State" />
                    </div>
                    <div className="col-md-6">
                      <label>ZIP Code</label>
                      <input className="form-control" type="text" placeholder="ZIP Code" />
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="newaccount" />
                        <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="shipto"
                          checked={shipToDifferent}
                          onChange={(e) => setShipToDifferent(e.target.checked)}
                        />
                        <label className="custom-control-label" htmlFor="shipto">Ship to different address</label>
                      </div>
                    </div>
                  </div>
                </div>

                {shipToDifferent && (
                  <div className="shipping-address">
                    <h2>Shipping Address</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <input className="form-control" type="text" placeholder="First Name" />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input className="form-control" type="text" placeholder="Last Name" />
                      </div>
                      <div className="col-md-6">
                        <label>E-mail</label>
                        <input className="form-control" type="email" placeholder="E-mail" />
                      </div>
                      <div className="col-md-6">
                        <label>Mobile No</label>
                        <input className="form-control" type="tel" placeholder="Mobile No" />
                      </div>
                      <div className="col-md-12">
                        <label>Address</label>
                        <input className="form-control" type="text" placeholder="Address" />
                      </div>
                      <div className="col-md-6">
                        <label>Country</label>
                        <select className="custom-select">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label>City</label>
                        <input className="form-control" type="text" placeholder="City" />
                      </div>
                      <div className="col-md-6">
                        <label>State</label>
                        <input className="form-control" type="text" placeholder="State" />
                      </div>
                      <div className="col-md-6">
                        <label>ZIP Code</label>
                        <input className="form-control" type="text" placeholder="ZIP Code" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="checkout-inner">
                <div className="checkout-summary">
                  <h1>Cart Total</h1>
                  {cartItems.map((item) => (
                    <p key={item.id}>{item.name}<span>${item.price * item.qty}</span></p>
                  ))}
                  {!cartItems.length && <p>Your cart is empty<span>$0</span></p>}
                  <p className="sub-total">Sub Total<span>${subtotal}</span></p>
                  <p className="ship-cost">Shipping Cost<span>${shipping}</span></p>
                  <h2>Grand Total<span>${total}</span></h2>
                </div>

                <div className="checkout-payment">
                  <div className="payment-methods">
                    <h1>Payment Methods</h1>
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="payment-method">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id={method.id}
                            name="payment"
                            onChange={() => setSelectedPayment(method.id)}
                          />
                          <label className="custom-control-label" htmlFor={method.id}>{method.label}</label>
                        </div>
                        {selectedPayment === method.id && (
                          <div className="payment-content">
                            <p>{method.desc}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Link className={`btn${cartItems.length === 0 ? ' disabled' : ''}`} to={cartItems.length === 0 ? '/products' : '/my-account?tab=orders'}>Place Order</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
