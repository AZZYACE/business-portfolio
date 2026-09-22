import { useEffect, useState } from 'react';
import { homeData } from '../../data/businessData';

function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = homeData.slides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="home-slideshow">
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="home-slideshow-image"
      />

      <div className="home-slideshow-overlay">
        <div>
          <h1>{slides[currentIndex].title}</h1>

          <p>{homeData.description}</p>

          <p>{homeData.operatingHours}</p>
        </div>

        <div className="home-slideshow-actions">
          <button onClick={previousSlide} aria-label="Previous slide">
            ‹
          </button>

          <button onClick={nextSlide} aria-label="Next slide">
            ›
          </button>
        </div>
      </div>

      <div className="home-slideshow-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={index === currentIndex ? "active" : ""}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlideshow;