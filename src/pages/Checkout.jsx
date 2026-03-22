import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap'
import { useBooking } from '../contexts/BookingContext'
import { useNavigate } from 'react-router-dom'
import './Checkout.css'

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useBooking()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity)
  }

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value)
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    // Here you would typically send the order to a backend
    setOrderPlaced(true)
    setTimeout(() => {
      clearCart()
      navigate('/')
    }, 3000)
  }

  const totalPrice = getTotalPrice()
  const tax = totalPrice * 0.1 // 10% tax
  const grandTotal = totalPrice + tax

  if (cart.length === 0 && !orderPlaced) {
    return (
      <Container className="checkout-empty py-5">
        <div className="text-center py-5">
          <h2>Your cart is empty</h2>
          <p>Add some packages to your cart to proceed with booking</p>
          <Button className="btn-premium" onClick={() => navigate('/#categories')}>
            Browse Packages
          </Button>
        </div>
      </Container>
    )
  }

  if (orderPlaced) {
    return (
      <Container className="checkout-success py-5">
        <div className="text-center py-5">
          <div className="success-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for booking with WedGraphy. We'll contact you within 24 hours.</p>
          <Button className="btn-premium" onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container className="checkout-page py-5">
      <h1 className="checkout-title">Checkout</h1>
      
      <Row>
        <Col lg={8}>
          <Card className="checkout-card mb-4">
            <Card.Body>
              <h3 className="section-title">Order Summary</h3>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <div className="item-info">
                      <h5>{item.title}</h5>
                      <p className="text-muted">{item.description}</p>
                      <div className="price-display">
                        <strong>Price per package: ${item.price}</strong>
                      </div>
                      {item.bookingDetails && (
                        <div className="booking-details">
                          <small>📅 Event Date: {new Date(item.bookingDetails.eventDate).toLocaleDateString()}</small>
                          <small>👥 Guests: {item.bookingDetails.guestCount}</small>
                          <small>📧 Email: {item.bookingDetails.email}</small>
                        </div>
                      )}
                    </div>
                    <div className="item-actions">
                      <div className="quantity-selector">
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="item-price">
                        <strong>${(parseFloat(item.price) * item.quantity).toLocaleString()}</strong>
                      </div>
                      <Button 
                        variant="link" 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>

          <Card className="checkout-card">
            <Card.Body>
              <h3 className="section-title">Booking Information</h3>
              {cart.map((item, index) => (
                item.bookingDetails && (
                  <div key={index} className="booking-info-summary">
                    <h5>{item.title} - ${item.price}/package</h5>
                    <p><strong>Name:</strong> {item.bookingDetails.name}</p>
                    <p><strong>Email:</strong> {item.bookingDetails.email}</p>
                    <p><strong>Phone:</strong> {item.bookingDetails.phone}</p>
                    <p><strong>Event Date:</strong> {new Date(item.bookingDetails.eventDate).toLocaleDateString()}</p>
                    <p><strong>Guests:</strong> {item.bookingDetails.guestCount || 'Not specified'}</p>
                    {item.bookingDetails.specialRequests && (
                      <p><strong>Special Requests:</strong> {item.bookingDetails.specialRequests}</p>
                    )}
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Subtotal:</strong> ${(parseFloat(item.price) * item.quantity).toLocaleString()}</p>
                    <hr />
                  </div>
                )
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="checkout-summary-card">
            <Card.Body>
              <h3 className="section-title">Payment Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (10%):</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <Form onSubmit={handleSubmitOrder}>
                <Form.Group className="mb-3">
                  <Form.Label>Payment Method</Form.Label>
                  <div className="payment-methods">
                    <Form.Check
                      type="radio"
                      label="Credit Card"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={handlePaymentChange}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      label="PayPal"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={handlePaymentChange}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      label="Bank Transfer"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={handlePaymentChange}
                    />
                  </div>
                </Form.Group>

                {paymentMethod === 'card' && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Cardholder Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleFormChange}
                        required
                        placeholder="Name on card"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleFormChange}
                        required
                        placeholder="1234 5678 9012 3456"
                      />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleFormChange}
                            required
                            placeholder="MM/YY"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleFormChange}
                            required
                            placeholder="123"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}

                <Button type="submit" className="btn-premium w-100 mt-3">
                  Place Order - ${grandTotal.toLocaleString()}
                </Button>
              </Form>

              <Alert variant="info" className="mt-3">
                <small>Secure payment processed by Stripe. Your information is protected.</small>
              </Alert>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout