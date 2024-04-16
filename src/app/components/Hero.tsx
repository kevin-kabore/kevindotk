'use client'

import TextSlideshow from './text-slideshow'

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: 'smooth'})
    }
  }

  const textSlideshowItems = [
    'a software engineer...',
    'a Peloton employee...',
    'an NYU Alum...',
    'a Montverde Academy Alum...',
    'a tech enthusiast...',
    'a self-proclaimed economist...',
    'a competitor...',
    'an optimist...',
    'a follower of Christ...',
  ]
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
        <div className="absolute inset-0">
          <TextSlideshow prefix="kevin is" items={textSlideshowItems} />
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Kevindotk is <span className="slider">...</span>
            </h1>
          </div> */}
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
