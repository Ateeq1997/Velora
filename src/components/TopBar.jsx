import { contactDetails } from '../data/storeContent'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <i className="fa fa-envelope"></i> {contactDetails.primaryEmail}
          </div>
          <div className="col-sm-6">
            <i className="fa fa-phone-alt"></i> {contactDetails.phone}
          </div>
        </div>
      </div>
    </div>
  )
}
