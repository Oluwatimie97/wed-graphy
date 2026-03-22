import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { reviews } from '../data/data'
import './Pages.css'

const ReviewsPage = () => {
  const [filter, setFilter] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    text: ''
  })

  const allReviews = [...reviews]
  
  const averageRating = allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length

  const handleSubmitReview = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    alert('Thank you for your review! It will be published after moderation.')
    setShowForm(false)
    setNewReview({ name: '', rating: 5, text: '' })
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero reviews-hero">
        <Container>
          <div className="hero-content text-center">
            <h1 className="animate-on-scroll">What Our Couples Say</h1>
            <p className="animate-on-scroll">Real stories from real couples who trusted us with their special day</p>
          </div>
        </Container>
      </section>

      {/* Rating Summary */}
      <section className="rating-summary">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="rating-card text-center">
                <div className="average-rating">
                  <div className="rating-number">{averageRating.toFixed(1)}</div>
                  <div className="rating-stars">
                    {'★'.repeat(Math.round(averageRating))}{'☆'.repeat(5 - Math.round(averageRating))}
                  </div>
                  <div className="rating-count">Based on {allReviews.length}+ reviews</div>
                </div>
                <div className="rating-bars">
                  {[5, 4, 3, 2, 1].map(star => {
                    const count = allReviews.filter(r => r.rating === star).length
                    const percentage = (count / allReviews.length) * 100
                    return (
                      <div key={star} className="rating-bar-item">
                        <span className="star-label">{star} ★</span>
                        <div className="bar-container">
                          <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
                        </div>
                        <span className="count">{count}</span>
                      </div>
                    )
                  })}
                </div>
                <Button className="write-review-btn" onClick={() => setShowForm(true)}>
                  Write a Review
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-grid-section">
        <Container>
          <div className="filter-section text-center mb-5">
            <button 
              className={`filter-review-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Reviews
            </button>
            <button 
              className={`filter-review-btn ${filter === '5' ? 'active' : ''}`}
              onClick={() => setFilter('5')}
            >
              5 Stars
            </button>
            <button 
              className={`filter-review-btn ${filter === '4' ? 'active' : ''}`}
              onClick={() => setFilter('4')}
            >
              4 Stars
            </button>
          </div>

          <Row className="g-4">
            {allReviews
              .filter(review => filter === 'all' || review.rating.toString() === filter)
              .map((review, index) => (
                <Col lg={4} md={6} key={review.id}>
                  <Card className="review-card-detailed">
                    <Card.Body>
                      <div className="review-header">
                        <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                        <div className="reviewer-info">
                          <h4>{review.name}</h4>
                          <div className="review-stars">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="review-text-large">"{review.text}"</p>
                      <div className="review-footer">
                        <span className="review-date">Verified Wedding • 2024</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>

          {/* Featured Video Testimonials */}
          <div className="video-testimonials mt-5">
            <h3 className="text-center mb-4">Video Testimonials</h3>
            <Row className="g-4">
              <Col md={6}>
                <div className="video-card">
                  <div className="video-placeholder">
                    <div className="play-icon">▶</div>
                    <p>Sarah & Michael's Wedding Story</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="video-card">
                  <div className="video-placeholder">
                    <div className="play-icon">▶</div>
                    <p>Emily & David's Journey</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Review Form Modal */}
      {showForm && (
        <div className="review-form-modal">
          <div className="modal-overlay" onClick={() => setShowForm(false)}></div>
          <div className="modal-content">
            <h3>Share Your Experience</h3>
            <Form onSubmit={handleSubmitReview}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                >
                  <option value={5}>★★★★★ (5 stars)</option>
                  <option value={4}>★★★★☆ (4 stars)</option>
                  <option value={3}>★★★☆☆ (3 stars)</option>
                  <option value={2}>★★☆☆☆ (2 stars)</option>
                  <option value={1}>★☆☆☆☆ (1 star)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={newReview.text}
                  onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100">Submit Review</Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewsPage