import { createContext, useContext, useEffect, useState } from 'react'

const ShopContext = createContext(null)

const STORAGE_KEY = 'aurevia-shop-state'

const defaultCartItems = [
  { id: 1, image: '/img/product-1.jpg', name: 'Premium Wireless Headphones', price: 149, qty: 1 },
  { id: 2, image: '/img/product-2.jpg', name: 'Designer Leather Jacket', price: 299, qty: 1 },
  { id: 3, image: '/img/product-3.jpg', name: 'Smart Fitness Watch', price: 199, qty: 1 },
]

const defaultWishlistItems = [
  { id: 7, image: '/img/product-7.jpg', name: 'Luxury Perfume Set', price: 119, qty: 1 },
  { id: 8, image: '/img/product-8.jpg', name: 'Bluetooth Speaker', price: 99, qty: 1 },
  { id: 10, image: '/img/product-10.jpg', name: 'Classic Sunglasses', price: 69, qty: 1 },
]

const loadInitialState = () => {
  if (typeof window === 'undefined') {
    return {
      cartItems: defaultCartItems,
      wishlistItems: defaultWishlistItems,
    }
  }

  try {
    const storedState = window.localStorage.getItem(STORAGE_KEY)
    if (!storedState) {
      return {
        cartItems: defaultCartItems,
        wishlistItems: defaultWishlistItems,
      }
    }

    const parsed = JSON.parse(storedState)
    return {
      cartItems: Array.isArray(parsed.cartItems) ? parsed.cartItems : defaultCartItems,
      wishlistItems: Array.isArray(parsed.wishlistItems) ? parsed.wishlistItems : defaultWishlistItems,
    }
  } catch {
    return {
      cartItems: defaultCartItems,
      wishlistItems: defaultWishlistItems,
    }
  }
}

export function ShopProvider({ children }) {
  const [state, setState] = useState(loadInitialState)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const addToCart = (product, qty = 1) => {
    setState((currentState) => {
      const existingItem = currentState.cartItems.find((item) => item.id === product.id)

      if (existingItem) {
        return {
          ...currentState,
          cartItems: currentState.cartItems.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + qty } : item
          ),
        }
      }

      return {
        ...currentState,
        cartItems: [...currentState.cartItems, { ...product, qty }],
      }
    })
  }

  const addToWishlist = (product, qty = 1) => {
    setState((currentState) => {
      const existingItem = currentState.wishlistItems.find((item) => item.id === product.id)

      if (existingItem) {
        return {
          ...currentState,
          wishlistItems: currentState.wishlistItems.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + qty } : item
          ),
        }
      }

      return {
        ...currentState,
        wishlistItems: [...currentState.wishlistItems, { ...product, qty }],
      }
    })
  }

  const updateCartQty = (id, delta) => {
    setState((currentState) => ({
      ...currentState,
      cartItems: currentState.cartItems
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)),
    }))
  }

  const updateWishlistQty = (id, delta) => {
    setState((currentState) => ({
      ...currentState,
      wishlistItems: currentState.wishlistItems
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)),
    }))
  }

  const removeFromCart = (id) => {
    setState((currentState) => ({
      ...currentState,
      cartItems: currentState.cartItems.filter((item) => item.id !== id),
    }))
  }

  const removeFromWishlist = (id) => {
    setState((currentState) => ({
      ...currentState,
      wishlistItems: currentState.wishlistItems.filter((item) => item.id !== id),
    }))
  }

  const moveWishlistItemToCart = (item) => {
    addToCart(item, item.qty)
    removeFromWishlist(item.id)
  }

  const clearCart = () => {
    setState((currentState) => ({
      ...currentState,
      cartItems: [],
    }))
  }

  const value = {
    cartItems: state.cartItems,
    wishlistItems: state.wishlistItems,
    cartCount: state.cartItems.reduce((total, item) => total + item.qty, 0),
    wishlistCount: state.wishlistItems.reduce((total, item) => total + item.qty, 0),
    addToCart,
    addToWishlist,
    updateCartQty,
    updateWishlistQty,
    removeFromCart,
    removeFromWishlist,
    moveWishlistItemToCart,
    clearCart,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop must be used inside a ShopProvider')
  }

  return context
}