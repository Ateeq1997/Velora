import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import MyAccount from './pages/MyAccount'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Contact from './pages/Contact'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<InfoPage type="about" />} />
        <Route path="/privacy-policy" element={<InfoPage type="privacy" />} />
        <Route path="/terms" element={<InfoPage type="terms" />} />
        <Route path="/payment-policy" element={<InfoPage type="payment" />} />
        <Route path="/shipping-policy" element={<InfoPage type="shipping" />} />
        <Route path="/return-policy" element={<InfoPage type="returns" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
