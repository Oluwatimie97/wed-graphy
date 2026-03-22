import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap'
import { categories } from '../data/data'
import { useBooking } from '../contexts/BookingContext'
import './Pages.css'

const CategoriesPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const { addToCart } = useBooking()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    specialRequests: ''
  })

  const handleBookNow = (packageItem) => {
    setSelectedPackage(packageItem)
    setShowModal(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const bookingItem = {
      ...selectedPackage,
      price: selectedPackage.price.toString(),
      quantity: 1,
      bookingDetails: formData,
      bookingDate: new Date().toISOString()
    }
    addToCart(bookingItem)
    setShowModal(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      specialRequests: ''
    })
    alert('Package added to cart! Proceed to checkout.')
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero categories-hero">
        <Container>
          <div className="hero-content text-center">
            <h1 className="animate-on-scroll">Our Photography Packages</h1>
            <p className="animate-on-scroll">Choose the perfect package that tells your unique love story</p>
          </div>
        </Container>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <Container>
          <div className="section-intro text-center mb-5">
            <h2>Wedding Photography Packages</h2>
            <p>Each package is carefully crafted to capture every precious moment of your special day</p>
          </div>

          <Row className="g-4">
            {categories.map((category, index) => (
              <Col lg={4} md={6} key={category.id}>
                <Card className="package-card premium-card">
                  <Card.Body className="text-center p-4">
                    <div className="package-icon">{category.icon}</div>
                    <h3 className="package-title">{category.title}</h3>
                    <div className="package-price">${category.price}</div>
                    <p className="package-description">{category.description}</p>
                    
                    <div className="package-features">
                      <h4>What's Included:</h4>
                      <ul>
                        {category.title === "Basic Package" && (
                          <>
                            <li>✓ 4 hours of coverage</li>
                            <li>✓ 200+ edited high-resolution photos</li>
                            <li>✓ Online gallery access</li>
                            <li>✓ USB drive with all photos</li>
                            <li>✓ 10 printed proofs</li>
                          </>
                        )}
                        {category.title === "Premium Package" && (
                          <>
                            <li>✓ 8 hours of coverage</li>
                            <li>✓ 400+ edited high-resolution photos</li>
                            <li>✓ Engagement photo session</li>
                            <li>✓ Premium leather album (20 pages)</li>
                            <li>✓ Online gallery with sharing</li>
                            <li>✓ Second photographer</li>
                          </>
                        )}
                        {category.title === "Luxury Package" && (
                          <>
                            <li>✓ Full day coverage (12 hours)</li>
                            <li>✓ 600+ edited high-resolution photos</li>
                            <li>✓ Engagement & pre-wedding shoot</li>
                            <li>✓ Luxury album (30 pages)</li>
                            <li>✓ Two photographers + assistant</li>
                            <li>✓ Drone aerial shots</li>
                            <li>✓ Same-day preview gallery</li>
                          </>
                        )}
                      </ul>
                    </div>
                    
                    <Button 
                      className="book-now-btn"
                      onClick={() => handleBookNow(category)}
                    >
                      Book This Package
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Add-on Services */}
          <div className="addons-section mt-5">
            <h3 className="text-center mb-4">Add-On Services</h3>
            <Row className="g-4">
              <Col md={3}>
                <div className="addon-card">
                  <div className="addon-icon">🎥</div>
                  <h4>Video Coverage</h4>
                  <p>Full wedding videography with highlight reel</p>
                  <span className="addon-price">+$1,000</span>
                </div>
              </Col>
              <Col md={3}>
                <div className="addon-card">
                  <div className="addon-icon">📖</div>
                  <h4>Extra Album</h4>
                  <p>Additional premium leather album for parents</p>
                  <span className="addon-price">+$300</span>
                </div>
              </Col>
              <Col md={3}>
                <div className="addon-card">
                  <div className="addon-icon">✈️</div>
                  <h4>Destination Fee</h4>
                  <p>Travel and accommodation for destination weddings</p>
                  <span className="addon-price">Custom Quote</span>
                </div>
              </Col>
              <Col md={3}>
                <div className="addon-card">
                  <div className="addon-icon">🖼️</div>
                  <h4>Canvas Prints</h4>
                  <p>Large format canvas prints (set of 3)</p>
                  <span className="addon-price">+$500</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedPackage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Event Date *</Form.Label>
                  <Form.Control
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Special Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" className="w-100">Add to Cart</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CategoriesPage