import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Gallery from '../components/Gallery'
import WhyUs from '../components/WhyUs'
import Reviews from '../components/Reviews'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Gallery />
      <WhyUs />
      <Reviews />
    </>
  )
}

export default HomePage