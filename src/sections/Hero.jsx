import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'

function Hero({ id }) {
  return (
    <section id={id} className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <HeroText />
      <ParallaxBackground />
    </section>
  )
}

export default Hero