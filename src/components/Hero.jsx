import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    navigate('/why-us')
  }

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content animate-on-scroll">
            <div className="hero-badge">Premium Photography</div>
            <h1 className="hero-title">
              Book Now For Your <span className="highlight">Wedding Photography</span>
            </h1>
            <p className="hero-description">
              Wedding photography is a specialty in photography that is primarily focused on
              the photography of events and activities relating to weddings.
            </p>
            <Button className="btn-learn-more" onClick={handleLearnMore}>
              Learn More
              <span className="arrow">→</span>
            </Button>
          </Col>
          <Col lg={6} className="hero-image-wrapper animate-on-scroll">
            <div className="hero-image">
              <div className="image-container">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Wedding Photography"
                  className="main-image img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero