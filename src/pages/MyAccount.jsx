import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { getProductPath } from '../data/storeContent'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Client Account', active: true },
]

const orders = [
  { id: '#AUR-24001', date: '01 Jan 2024', items: 3, total: '$447', status: 'Delivered', recommendedProductId: 1 },
  { id: '#AUR-24002', date: '15 Feb 2024', items: 1, total: '$149', status: 'Delivered', recommendedProductId: 3 },
  { id: '#AUR-24003', date: '22 Mar 2024', items: 2, total: '$328', status: 'Processing', recommendedProductId: 2 },
  { id: '#AUR-24004', date: '10 Apr 2024', items: 4, total: '$516', status: 'Shipped', recommendedProductId: 10 },
  { id: '#AUR-24005', date: '28 Apr 2024', items: 1, total: '$299', status: 'Processing', recommendedProductId: 4 },
]

export default function MyAccount() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedOrder, setSelectedOrder] = useState(null)
  const activeTab = searchParams.get('tab') || 'profile'

  const setActiveTab = (tab) => {
    const next = new URLSearchParams(searchParams)
    if (tab === 'profile') {
      next.delete('tab')
    } else {
      next.set('tab', tab)
    }
    setSearchParams(next)
  }

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="my-account">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="account-tab">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'profile' ? ' active' : ''}`} onClick={() => setActiveTab('profile')}>
                      <i className="fa fa-user"></i> Profile Details
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'orders' ? ' active' : ''}`} onClick={() => setActiveTab('orders')}>
                      <i className="fa fa-shopping-bag"></i> Orders & Tracking
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'wishlist' ? ' active' : ''}`} onClick={() => setActiveTab('wishlist')}>
                      <i className="fa fa-heart"></i> Wishlist
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'address' ? ' active' : ''}`} onClick={() => setActiveTab('address')}>
                      <i className="fa fa-map-marker"></i> Saved Address
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'password' ? ' active' : ''}`} onClick={() => setActiveTab('password')}>
                      <i className="fa fa-lock"></i> Security
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <i className="fa fa-sign-out-alt"></i> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="account-content">
                {activeTab === 'profile' && (
                  <div className="account-profile">
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                        <input className="form-control" type="text" defaultValue="Ariana" />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input className="form-control" type="text" defaultValue="Vale" />
                      </div>
                      <div className="col-md-6">
                        <label>Email Address</label>
                        <input className="form-control" type="email" defaultValue="ariana@aurevia.studio" />
                      </div>
                      <div className="col-md-6">
                        <label>Phone Number</label>
                        <input className="form-control" type="tel" defaultValue="+1 (323) 555-0148" />
                      </div>
                      <div className="col-md-12">
                        <button className="btn">Save Profile Changes</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="account-orders">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="thead-dark">
                          <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.date}</td>
                              <td>{order.items}</td>
                              <td>{order.total}</td>
                              <td><span className={`badge badge-${order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'info' : 'warning'}`}>{order.status}</span></td>
                              <td><button type="button" className="btn btn-link p-0" onClick={() => setSelectedOrder(order)}>View</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {selectedOrder && (
                      <div className="mt-3">
                        <h4>{selectedOrder.id}</h4>
                        <p>Placed on {selectedOrder.date} with {selectedOrder.items} item(s). Current status: <strong>{selectedOrder.status}</strong>.</p>
                        <Link className="btn" to={getProductPath(selectedOrder.recommendedProductId)}>View Recommended Product</Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="account-wishlist">
                    <p>Your saved edit lives in the <Link to="/wishlist">Wishlist</Link> page, where you can move pieces straight into the cart.</p>
                  </div>
                )}

                {activeTab === 'address' && (
                  <div className="account-address">
                    <div className="row">
                      <div className="col-md-12">
                        <label>Address</label>
                        <input className="form-control" type="text" defaultValue="18 Mercer Atelier" />
                      </div>
                      <div className="col-md-6">
                        <label>City</label>
                        <input className="form-control" type="text" defaultValue="West Hollywood" />
                      </div>
                      <div className="col-md-6">
                        <label>State</label>
                        <input className="form-control" type="text" defaultValue="California" />
                      </div>
                      <div className="col-md-6">
                        <label>ZIP Code</label>
                        <input className="form-control" type="text" defaultValue="90069" />
                      </div>
                      <div className="col-md-6">
                        <label>Country</label>
                        <select className="custom-select">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <button className="btn">Save Address</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'password' && (
                  <div className="account-password">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Current Password</label>
                        <input className="form-control" type="password" placeholder="Enter current password" />
                      </div>
                      <div className="col-md-6">
                        <label>New Password</label>
                        <input className="form-control" type="password" placeholder="Choose a new password" />
                      </div>
                      <div className="col-md-6">
                        <label>Confirm Password</label>
                        <input className="form-control" type="password" placeholder="Confirm your new password" />
                      </div>
                      <div className="col-md-12">
                        <button className="btn">Update Password</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
