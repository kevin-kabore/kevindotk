import React from 'react'
import Navbar from '../components/Navbar'

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div className="relative h-screen">
      {/* Placeholder Hero with Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Black Box with Opacity */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          aria-hidden="true"
        />
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="IMG_0371.jpg"
        >
          <source src="frank.MP4" type="video/mp4" />
          {/* Add additional video sources for different formats if necessary */}
        </video>
        {/* Animated Slideshow with Placeholder Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Kevindotk is <span className="slider">...</span>
          </h1>
        </div>
        {/* Animated Down Arrow Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            className="text-white animate-bounce focus:outline-none"
            onClick={scrollToAbout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Main Content */}
      <div>
        <div className="container mx-auto px-4 py-8" id="about">
          <section className="mb-8" id="about">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              About
            </h2>
            <ul className="list-disc list-inside">
              <li>Peloton Interactive (2021 – Present)</li>
              <li>Paperspace (2019 – 2021)</li>
              {/* Add more experiences */}
            </ul>
          </section>
          <section className="mb-8" id="experience">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Experience
            </h2>
            <ul className="list-disc list-inside">
              <li>Peloton Interactive (2021 – Present)</li>
              <li>Paperspace (2019 – 2021)</li>
              {/* Add more experiences */}
            </ul>
          </section>
          <section className="mb-8" id="interests">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Interests
            </h2>
            <p>
              Following economic trends, new technology, competitive sports
              (basketball is my favorite), human psychology.
            </p>
          </section>
          <section id="contact">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Contact
            </h2>
            <p>Email: kevin.s.kabore@gmail.com</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/kevinkabore/"
                className="text-blue-600 hover:underline"
              >
                Kevin Kabor&eacute;&apos;s LinkedIn Profile
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
