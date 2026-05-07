import { Link } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'
import Layout from '../components/Layout'

const pageContent = {
  about: {
    title: 'About Aurevia',
    eyebrow: 'Luxury commerce, reimagined.',
    copy: [
      'Aurevia blends curated fashion, premium accessories, and standout technology into one polished storefront experience.',
      'The brand is designed to feel editorial and elevated, making it a stronger portfolio piece than a generic storefront clone.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Respecting customer data at every step.',
    copy: [
      'Aurevia collects only the information needed to process orders, personalize recommendations, and improve the shopping experience.',
      'Customer information is handled securely and never shared beyond the services required to operate payments, shipping, and support.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    eyebrow: 'Clear rules for a smooth shopping experience.',
    copy: [
      'By browsing or purchasing through Aurevia, customers agree to our product availability, pricing, shipping, and returns policies.',
      'We reserve the right to update catalog content, pricing, and service information to keep the storefront accurate and current.',
    ],
  },
  payment: {
    title: 'Payment Policy',
    eyebrow: 'Secure transactions with trusted providers.',
    copy: [
      'Aurevia supports secure card payments and digital payment methods through encrypted checkout flows.',
      'Orders are confirmed only after successful authorization, and suspicious transactions may be reviewed before fulfillment.',
    ],
  },
  shipping: {
    title: 'Shipping Policy',
    eyebrow: 'Fast fulfillment with transparent delivery updates.',
    copy: [
      'Orders are processed quickly and dispatched with tracking where available so customers can monitor every shipment milestone.',
      'Delivery timelines vary by location, but premium orders are prioritized to keep the experience consistent with the brand promise.',
    ],
  },
  returns: {
    title: 'Return Policy',
    eyebrow: 'Confident shopping backed by flexible returns.',
    copy: [
      'Eligible items can be returned within the stated return window as long as they remain unused and in original condition.',
      'Return approvals, exchanges, and refunds are managed by the support team to keep the process simple and customer-friendly.',
    ],
  },
}

export default function InfoPage({ type }) {
  const content = pageContent[type] || pageContent.about
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: content.title, active: true },
  ]

  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />

      <div className="my-account">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="account-content">
                <div className="account-profile">
                  <h4>{content.title}</h4>
                  <p><strong>{content.eyebrow}</strong></p>
                  {content.copy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="mt-4">
                    <Link className="btn" to="/contact">Contact Aurevia</Link>
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