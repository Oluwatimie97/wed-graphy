import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { reviews } from '../data/data'

const Reviews = () => {
  return (
    <section className="reviews-section py-5 bg-light" id="reviews">
      <Container>
        <div className="section-header text-center mb-5 animate-on-scroll">
          <h2 className="display-5 fw-bold">What Our Clients Say</h2>
          <p className="text-muted fs-5">Real stories from real couples</p>
        </div>
        <Row className="g-4">
          {reviews.map((review) => (
            <Col lg={4} md={6} key={review.id} className="animate-on-scroll">
              <Card className="review-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="quote-icon display-1 text-primary opacity-25 mb-3">"</div>
                  <Card.Text className="fst-italic text-muted mb-4">
                    "{review.text}"
                  </Card.Text>
                  <div className="reviewer d-flex align-items-center gap-3">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="rounded-circle"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-1 fw-bold">{review.name}</h5>
                      <div className="stars text-warning">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Reviews