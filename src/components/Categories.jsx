import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { categories } from '../data/data'
import BookingModal from './BookingModal'

const Categories = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handleBookNow = (packageItem) => {
    setSelectedPackage(packageItem)
    setShowModal(true)
  }

  return (
    <>
      <section className="categories-section py-5" id="categories">
        <Container>
          <div className="section-header text-center mb-5 animate-on-scroll">
            <h2 className="display-5 fw-bold">Categories & Prices</h2>
            <p className="text-muted fs-5">Choose the perfect package for your special day</p>
          </div>
          <Row className="g-4">
            {categories.map((category) => (
              <Col lg={4} md={6} key={category.id} className="animate-on-scroll">
                <Card className="category-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="category-icon display-1 mb-3">{category.icon}</div>
                    <Card.Title className="h3 mb-3">{category.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {category.description}
                    </Card.Text>
                    <div className="price h1 text-primary fw-bold mb-3">${category.price}</div>
                    <Button 
                      variant="outline-primary" 
                      className="btn-select px-4"
                      onClick={() => handleBookNow(category)}
                    >
                      Book Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <BookingModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        package={selectedPackage}
      />
    </>
  )
}

export default Categories