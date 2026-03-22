import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { whyUsFeatures } from '../data/data'

const WhyUs = () => {
  return (
    <section className="whyus-section py-5" id="why-us">
      <Container>
        <div className="section-header text-center mb-5 animate-on-scroll">
          <h2 className="display-5 fw-bold">Why Choose Us</h2>
          <p className="text-muted fs-5">What makes us different</p>
        </div>
        <Row className="g-4">
          {whyUsFeatures.map((feature) => (
            <Col lg={3} md={6} key={feature.id} className="animate-on-scroll">
              <Card className="feature-card h-100 border-0 text-center shadow-sm">
                <Card.Body className="p-4">
                  <div className="feature-icon display-1 mb-3">{feature.icon}</div>
                  <Card.Title className="h5 fw-bold mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WhyUs