import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                  <p><i className="fa fa-map-marker"></i> 123 Aurevia Avenue, Los Angeles, USA</p>
                  <p><i className="fa fa-envelope"></i> support@aurevia.shop</p>
                  <p><i className="fa fa-phone"></i> +123-456-7890</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Follow Us</h2>
                <div className="contact-info">
                  <div className="social">
                    <a href="https://x.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Company Info</h2>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms &amp; Condition</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Purchase Info</h2>
                <ul>
                  <li><Link to="/payment-policy">Payment Policy</Link></li>
                  <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                  <li><Link to="/return-policy">Return Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row payment align-items-center">
            <div className="col-md-6">
              <div className="payment-method">
                <h2>We Accept:</h2>
                <img src="/img/payment-method.png" alt="Payment Method" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-security">
                <h2>Secured By:</h2>
                <img src="/img/godaddy.svg" alt="GoDaddy Security" />
                <img src="/img/norton.svg" alt="Norton Security" />
                <img src="/img/ssl.svg" alt="SSL Security" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>Copyright &copy; <Link to="/">Aurevia</Link>. All Rights Reserved</p>
            </div>
            <div className="col-md-6 template-by">
              <p>Curated luxury, fashion, and tech for modern shoppers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
