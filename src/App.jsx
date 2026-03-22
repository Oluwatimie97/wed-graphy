import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import GalleryPage from './pages/GalleryPage'
import WhyUsPage from './pages/WhyUsPage'
import ReviewsPage from './pages/ReviewsPage'
import Checkout from './pages/Checkout'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [location.pathname])

  return (
    <div className="wedding-photography">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App