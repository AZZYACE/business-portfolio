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
      const newVisibleCount = window.innerWidth <= 768 ? 1 : 4;

      setVisibleCount(newVisibleCount);
      setCurrentIndex((currentIndex) =>
        Math.min(
          currentIndex,
          Math.max(cateringData.length - newVisibleCount, 0)
        )
      );
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
    setCurrentIndex((currentIndex) =>
      Math.min(currentIndex + 1, maxIndex)
    );
  };

  const previousCatering = () => {
    setCurrentIndex((currentIndex) =>
      Math.max(currentIndex - 1, 0)
    );
  };

  const visibleCatering = cateringData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="catering-carousel-container">
      <div className="catering-carousel">
        <button
          type="button"
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
          type="button"
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