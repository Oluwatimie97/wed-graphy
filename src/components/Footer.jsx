import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="newsletter-content">
                <h3>Subscribe to Our Newsletter</h3>
                <p>Get the latest photography tips, exclusive offers, and wedding inspiration straight to your inbox</p>
                <Form onSubmit={handleSubscribe} className="newsletter-form">
                  <InputGroup className="shadow-sm">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="newsletter-input"
                    />
                    <Button type="submit" className="newsletter-btn">
                      Subscribe
                      <span className="ms-2">→</span>
                    </Button>
                  </InputGroup>
                  {subscribed && (
                    <div className="success-message mt-3">
                      ✓ Thank you for subscribing! Check your inbox for updates.
                    </div>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="main-footer">
        <Row className="g-4">
          {/* Brand Section */}
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <div className="brand-logo">
                <span className="brand-icon">📸</span>
                <span className="brand-text">WedGraphy</span>
              </div>
              <p className="brand-description">
                Capturing timeless moments and telling your unique love story through the lens of creativity and passion.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="Pinterest">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/categories">Packages</a></li>
                <li><a href="/gallery">Portfolio</a></li>
                <li><a href="/why-us">About Us</a></li>
                <li><a href="/reviews">Testimonials</a></li>
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="/categories">Wedding Photography</a></li>
                <li><a href="/categories">Engagement Shoots</a></li>
                <li><a href="/categories">Pre-Wedding Sessions</a></li>
                <li><a href="/categories">Wedding Videography</a></li>
                <li><a href="/categories">Photo Albums</a></li>
                <li><a href="/categories">Destination Weddings</a></li>
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <strong>Studio Location</strong>
                  <p>123 Photography Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <strong>Phone</strong>
                  <p>+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <p>info@wedgraphy.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-text">
                  <strong>Working Hours</strong>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright & Legal */}
        <div className="footer-bottom">
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright">
                &copy; {new Date().getFullYear()} WedGraphy Photography. All rights reserved.
              </p>
            </Col>
            <Col md={6}>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#">Terms of Service</a>
                <span className="separator">|</span>
                <a href="#">Cookie Policy</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer