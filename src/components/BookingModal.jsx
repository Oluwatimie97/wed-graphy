import React, { useState } from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { useBooking } from '../contexts/BookingContext'

const BookingModal = ({ show, onHide, package: selectedPackage }) => {
  const { addToCart } = useBooking()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    specialRequests: ''
  })

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
      price: selectedPackage.price.toString(), // Ensure price is string
      quantity: 1,
      bookingDetails: formData,
      bookingDate: new Date().toISOString()
    }
    addToCart(bookingItem)
    onHide()
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      specialRequests: ''
    })
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="booking-modal">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="booking-modal-title">
          Book Your Session
          <span className="package-name">{selectedPackage?.title}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="package-summary mb-4">
          <h5>Package Summary</h5>
          <p><strong>{selectedPackage?.title}</strong> - ${selectedPackage?.price}</p>
          <p className="text-muted">{selectedPackage?.description}</p>
        </div>

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
                  placeholder="Enter your full name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
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

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="Approximate guest count"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Preferred Time</Form.Label>
                <Form.Control
                  type="time"
                  name="preferredTime"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any specific requirements or questions?"
            />
          </Form.Group>

          <div className="modal-actions">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button type="submit" className="btn-proceed">
              Add to Cart & Proceed
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default BookingModal