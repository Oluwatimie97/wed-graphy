import React, { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { galleryImages } from '../data/data'
import './Pages.css'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'ceremony', 'portrait', 'details', 'reception', 'couple']

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="page-hero gallery-hero">
        <Container>
          <div className="hero-content text-center">
            <h1 className="animate-on-scroll">Our Gallery</h1>
            <p className="animate-on-scroll">A collection of precious moments captured through our lens</p>
          </div>
        </Container>
      </section>

      {/* Gallery Stats */}
      <section className="gallery-stats">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Weddings Captured</div>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Photos Delivered</div>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Buttons */}
      <section className="gallery-filter-section">
        <Container>
          <div className="filter-buttons text-center">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <Container>
          <Row className="g-4">
            {filteredImages.map((image, index) => (
              <Col lg={4} md={6} key={image.id}>
                <div 
                  className="gallery-grid-item animate-on-scroll"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.url} alt={image.title} />
                  <div className="gallery-item-overlay">
                    <div className="overlay-content">
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                      <span className="view-icon">🔍</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal
        show={selectedImage !== null}
        onHide={() => setSelectedImage(null)}
        size="xl"
        centered
        className="lightbox-modal"
      >
        <Modal.Body className="p-0">
          {selectedImage && (
            <div className="lightbox-content">
              <img src={selectedImage.url} alt={selectedImage.title} />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default GalleryPage