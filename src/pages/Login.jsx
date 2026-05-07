import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Account Access', active: true },
]

export default function Login() {
  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="login">
        <div className="container-fluid">
          <div className="row">
            {/* Register Form */}
            <div className="col-lg-6">
              <div className="login-form">
                <h2>Create Your Aurevia Account</h2>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder="Enter first name" />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input className="form-control" type="text" placeholder="Enter last name" />
                  </div>
                  <div className="col-md-6">
                    <label>Email Address</label>
                    <input className="form-control" type="email" placeholder="name@domain.com" />
                  </div>
                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input className="form-control" type="tel" placeholder="+1 (___) ___-____" />
                  </div>
                  <div className="col-md-6">
                    <label>Create Password</label>
                    <input className="form-control" type="password" placeholder="Set a secure password" />
                  </div>
                  <div className="col-md-6">
                    <label>Confirm Password</label>
                    <input className="form-control" type="password" placeholder="Repeat your password" />
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Join Aurevia</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="col-lg-6">
              <div className="login-form">
                <h2>Member Sign In</h2>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email or Username</label>
                    <input className="form-control" type="text" placeholder="Enter your login" />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Enter your password" />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="keepSignedIn" />
                      <label className="custom-control-label" htmlFor="keepSignedIn">Keep me signed in on this device</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Access Account</button>
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
