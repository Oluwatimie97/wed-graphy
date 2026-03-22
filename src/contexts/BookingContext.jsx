import React, { createContext, useState, useContext } from 'react'

const BookingContext = createContext()

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(null)
  const [cart, setCart] = useState([])

  const addToCart = (packageItem) => {
    // Ensure price is a number
    const priceValue = typeof packageItem.price === 'string' 
      ? parseFloat(packageItem.price.replace(/,/g, '')) 
      : parseFloat(packageItem.price)
    
    setCart([...cart, { 
      ...packageItem, 
      id: Date.now(), 
      quantity: 1,
      price: priceValue
    }])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
    setBookingDetails(null)
  }

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemPrice = typeof item.price === 'number' ? item.price : parseFloat(item.price)
      return total + (itemPrice * item.quantity)
    }, 0)
  }

  return (
    <BookingContext.Provider value={{
      bookingDetails,
      setBookingDetails,
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      updateQuantity,
      getTotalPrice
    }}>
      {children}
    </BookingContext.Provider>
  )
}