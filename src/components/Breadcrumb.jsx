import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb-wrap">
      <div className="container-fluid">
        <ul className="breadcrumb">
          {items.map((item, index) => (
            <li key={index} className={`breadcrumb-item${item.active ? ' active' : ''}`}>
              {item.active ? item.label : <Link to={item.path}>{item.label}</Link>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
