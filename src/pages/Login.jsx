import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Login & Register', active: true },
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
                <h2>Register</h2>
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
                  <div className="col-md-6">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Password" />
                  </div>
                  <div className="col-md-6">
                    <label>Retype Password</label>
                    <input className="form-control" type="password" placeholder="Retype Password" />
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Create Account</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="col-lg-6">
              <div className="login-form">
                <h2>Sign In</h2>
                <div className="row">
                  <div className="col-md-6">
                    <label>E-mail / Username</label>
                    <input className="form-control" type="text" placeholder="E-mail / Username" />
                  </div>
                  <div className="col-md-6">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Password" />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="keepSignedIn" />
                      <label className="custom-control-label" htmlFor="keepSignedIn">Keep me signed in</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn">Sign In</button>
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
