import { useEffect, useState } from 'react';
import CateringCard from './CateringCard';
import { cateringData } from '../../data/businessData';

function CateringCarousel({ onBookNow }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth <= 768 ? 1 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 4);
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxIndex = Math.max(
    cateringData.length - visibleCount,
    0
  );

  const nextCatering = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousCatering = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleCatering = cateringData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="catering-carousel-container">

      <div className="catering-carousel">

        <button
          className="catering-carousel-arrow left"
          onClick={previousCatering}
          disabled={currentIndex === 0}
          aria-label="Previous catering services"
        >
          <svg
            viewBox="0 0 40 60"
            aria-hidden="true"
          >
            <path
              d="M34 5 L7 30 L34 55"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="catering-card-list">

          {visibleCatering.map((catering) => (
            <CateringCard
              key={catering.id}
              catering={catering}
              onBookNow={onBookNow}
            />
          ))}

        </div>

        <button
          className="catering-carousel-arrow right"
          onClick={nextCatering}
          disabled={currentIndex >= maxIndex}
          aria-label="Next catering services"
        >
          <svg
            viewBox="0 0 40 60"
            aria-hidden="true"
          >
            <path
              d="M6 5 L33 30 L6 55"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>

    </div>
  );
}

export default CateringCarousel;