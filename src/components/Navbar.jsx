import React, { useState, useEffect } from 'react'
import { Container, Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { useBooking } from '../contexts/BookingContext'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { cart } = useBooking()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <BootstrapNavbar 
      expand="lg" 
      className={`navbar-premium ${scrolled ? 'navbar-scrolled' : ''}`} 
      fixed="top"
    >
      <Container>
        <BootstrapNavbar.Brand 
          className="navbar-brand-premium"
          onClick={() => handleNavigation('/')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L12 7M12 3L8 7M12 3L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="4" y="7" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 18L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-main">WEDGRAPHY</span>
              <span className="logo-sub">LUXURY PHOTOGRAPHY</span>
            </div>
          </div>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="premium-nav" className="navbar-toggler-premium">
          <span></span>
          <span></span>
          <span></span>
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="premium-nav">
          <Nav className="ms-auto navbar-nav-premium">
            <Nav.Link 
              className={`nav-item-premium ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
              style={{ cursor: 'pointer' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              className={`nav-item-premium ${location.pathname === '/categories' ? 'active' : ''}`}
              onClick={() => handleNavigation('/categories')}
              style={{ cursor: 'pointer' }}
            >
              Categories
            </Nav.Link>
            <Nav.Link 
              className={`nav-item-premium ${location.pathname === '/gallery' ? 'active' : ''}`}
              onClick={() => handleNavigation('/gallery')}
              style={{ cursor: 'pointer' }}
            >
              Gallery
            </Nav.Link>
            <Nav.Link 
              className={`nav-item-premium ${location.pathname === '/why-us' ? 'active' : ''}`}
              onClick={() => handleNavigation('/why-us')}
              style={{ cursor: 'pointer' }}
            >
              Why Us
            </Nav.Link>
            <Nav.Link 
              className={`nav-item-premium ${location.pathname === '/reviews' ? 'active' : ''}`}
              onClick={() => handleNavigation('/reviews')}
              style={{ cursor: 'pointer' }}
            >
              Reviews
            </Nav.Link>
          </Nav>
          
          <div className="navbar-cta">
            <button className="btn-premium" onClick={() => handleNavigation('/checkout')}>
              <span>Book Now</span>
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar