import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './Pages.css'

const WhyUsPage = () => {
  const features = [
    {
      icon: "🎯",
      title: "10+ Years of Excellence",
      description: "With over a decade of experience, we've mastered the art of capturing weddings. Our expertise ensures every moment is perfectly framed and preserved forever.",
      details: "We've photographed over 500 weddings, from intimate ceremonies to grand celebrations, giving us unparalleled experience in handling any situation."
    },
    {
      icon: "🏆",
      title: "Award-Winning Photography",
      description: "Recognized by international photography organizations for our creativity, technical excellence, and ability to capture authentic emotions.",
      details: "Winner of 'Best Wedding Photographer' 2022-2023, and featured in top wedding magazines worldwide."
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "We understand your excitement to see your wedding photos. That's why we deliver previews within 48 hours and full galleries within 2 weeks.",
      details: "Your memories shouldn't wait. Our efficient editing process ensures you get your photos while the emotions are still fresh."
    },
    {
      icon: "💯",
      title: "100% Satisfaction Guarantee",
      description: "Your happiness is our priority. We work closely with you to ensure every expectation is met and exceeded.",
      details: "We offer a satisfaction guarantee - if you're not happy with any aspect, we'll make it right."
    },
    {
      icon: "📸",
      title: "State-of-the-Art Equipment",
      description: "We use only the best professional-grade cameras, lenses, and lighting equipment to ensure stunning image quality in any condition.",
      details: "Multiple backup cameras ensure no moment is ever missed, even in challenging lighting situations."
    },
    {
      icon: "🤝",
      title: "Personalized Approach",
      description: "Every couple is unique, and so is their love story. We take time to understand your vision and style before the big day.",
      details: "From initial consultation to final delivery, we're with you every step of the way, ensuring your photos reflect your personality."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, preferences, and what makes your love story unique."
    },
    {
      step: "02",
      title: "Custom Planning",
      description: "We create a detailed timeline and shot list tailored to your wedding day."
    },
    {
      step: "03",
      title: "Engagement Session",
      description: "A casual photo session to get comfortable in front of the camera and build rapport."
    },
    {
      step: "04",
      title: "The Big Day",
      description: "We capture every moment, from getting ready to the last dance, with unobtrusive professionalism."
    },
    {
      step: "05",
      title: "Editing & Curation",
      description: "Each photo is carefully selected and professionally edited to perfection."
    },
    {
      step: "06",
      title: "Delivery & Celebration",
      description: "Your stunning gallery is delivered, and we celebrate your beautiful memories together."
    }
  ]

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero whyus-hero">
        <Container>
          <div className="hero-content text-center">
            <h1 className="animate-on-scroll">Why Choose WedGraphy?</h1>
            <p className="animate-on-scroll">Discover what makes us the trusted choice for couples worldwide</p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="mission-content">
                <h2>Our Mission</h2>
                <p>To tell your unique love story through timeless imagery that you'll cherish for generations. We believe that every couple deserves to have their special day captured with artistry, authenticity, and heart.</p>
                <p>We don't just take photos - we create heirlooms. Each image is crafted with care, reflecting the joy, emotion, and beauty of your wedding day.</p>
                <div className="mission-stats">
                  <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Happy Couples</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Authentic Moments</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mission-image">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3" 
                  alt="Wedding Photography Mission"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <Container>
          <h2 className="text-center mb-5">What Sets Us Apart</h2>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="feature-card-detailed">
                  <Card.Body>
                    <div className="feature-icon-large">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-details">
                      <small>{feature.details}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <Container>
          <h2 className="text-center mb-5">Our Process</h2>
          <p className="text-center mb-5 process-intro">From first hello to final delivery, we make your photography experience seamless and enjoyable</p>
          <Row className="g-4">
            {process.map((step, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="process-step">
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content text-center">
            <h2>Ready to Tell Your Story?</h2>
            <p>Let's create something beautiful together</p>
            <button className="btn-premium-large">Book Your Consultation</button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default WhyUsPage