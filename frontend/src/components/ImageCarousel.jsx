import { useState, useEffect } from 'react';
import { getImagePath } from '../utils/imagePath';

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState({})

  const slides = [
    {
      id: 1,
      image: 'Bg.png',
      title: 'Autonomous Vehicles Pavilion',
      subtitle: 'Building Tomorrow',
      fallback: 'https://via.placeholder.com/1920x1080?text=Autonomous+Vehicles'
    },
    {
      id: 2,
      image: 'int.png',
      title: 'Welcome to DrukOptix AI',
      subtitle: 'Innovation & Excellence',
      fallback: 'https://via.placeholder.com/1920x1080?text=Welcome+to+DrukOptix'
    },
    {
      id: 3,
      image: 'Ai.png',
      title: 'Building Tomorrow',
      subtitle: 'With Artificial Intelligence',
      fallback: 'https://via.placeholder.com/1920x1080?text=Building+Tomorrow'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const handleImageError = (slideId) => {
    setImagesLoaded(prev => ({ ...prev, [slideId]: false }))
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            <img
              src={imagesLoaded[slide.id] === false ? slide.fallback : getImagePath(slide.image)}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={() => handleImageError(slide.id)}
            />
            {/* Very subtle gradient overlay - almost transparent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Centered Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white/90 drop-shadow-xl">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows - More subtle */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators - Very subtle */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 md:w-12'
                : 'bg-white/30 w-1.5 md:w-3 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}