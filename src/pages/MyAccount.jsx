import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'My Account', active: true },
]

const orders = [
  { id: '#ORD-2024-001', date: '01 Jan 2024', items: 3, total: '$447', status: 'Delivered' },
  { id: '#ORD-2024-002', date: '15 Feb 2024', items: 1, total: '$149', status: 'Delivered' },
  { id: '#ORD-2024-003', date: '22 Mar 2024', items: 2, total: '$328', status: 'Processing' },
  { id: '#ORD-2024-004', date: '10 Apr 2024', items: 4, total: '$516', status: 'Shipped' },
  { id: '#ORD-2024-005', date: '28 Apr 2024', items: 1, total: '$299', status: 'Processing' },
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
                      <i className="fa fa-user"></i> My Profile
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'orders' ? ' active' : ''}`} onClick={() => setActiveTab('orders')}>
                      <i className="fa fa-shopping-bag"></i> My Orders
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'wishlist' ? ' active' : ''}`} onClick={() => setActiveTab('wishlist')}>
                      <i className="fa fa-heart"></i> Wishlist
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'address' ? ' active' : ''}`} onClick={() => setActiveTab('address')}>
                      <i className="fa fa-map-marker"></i> My Address
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className={`nav-link${activeTab === 'password' ? ' active' : ''}`} onClick={() => setActiveTab('password')}>
                      <i className="fa fa-lock"></i> Change Password
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
                        <input className="form-control" type="text" defaultValue="John" />
                      </div>
                      <div className="col-md-6">
                        <label>Last Name</label>
                        <input className="form-control" type="text" defaultValue="Doe" />
                      </div>
                      <div className="col-md-6">
                        <label>E-mail</label>
                        <input className="form-control" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="col-md-6">
                        <label>Mobile No</label>
                        <input className="form-control" type="tel" defaultValue="+1 234 567 8900" />
                      </div>
                      <div className="col-md-12">
                        <button className="btn">Update Profile</button>
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
                        <Link className="btn" to="/product-detail">View Recommended Product</Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="account-wishlist">
                    <p>View your saved items in the <Link to="/wishlist">Wishlist</Link> page.</p>
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
                        <button className="btn">Update Address</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'password' && (
                  <div className="account-password">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Current Password</label>
                        <input className="form-control" type="password" placeholder="Current Password" />
                      </div>
                      <div className="col-md-6">
                        <label>New Password</label>
                        <input className="form-control" type="password" placeholder="New Password" />
                      </div>
                      <div className="col-md-6">
                        <label>Confirm Password</label>
                        <input className="form-control" type="password" placeholder="Confirm Password" />
                      </div>
                      <div className="col-md-12">
                        <button className="btn">Change Password</button>
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
