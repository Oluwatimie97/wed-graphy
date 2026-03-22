import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { galleryImages } from '../data/data'

const Gallery = () => {
  return (
    <section className="gallery-section py-5 bg-light" id="gallery">
      <Container>
        <div className="section-header text-center mb-5 animate-on-scroll">
          <h2 className="display-5 fw-bold">Our Gallery</h2>
          <p className="text-muted fs-5">Captured moments that last forever</p>
        </div>
        <Row className="g-4">
          {galleryImages.map((image) => (
            <Col lg={4} md={6} key={image.id} className="animate-on-scroll">
              <div className="gallery-item position-relative overflow-hidden rounded-4 shadow-sm">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="img-fluid w-100"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="gallery-overlay position-absolute bottom-0 start-0 w-100 p-4 text-white">
                  <h4 className="h5 mb-1">{image.title}</h4>
                  <p className="mb-0 small">{image.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Gallery