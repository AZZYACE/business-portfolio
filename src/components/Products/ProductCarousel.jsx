import { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/businessData';

function ProductCarousel({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts =
    activeCategory === 'ALL'
      ? productsData
      : productsData.filter(
          (product) => product.category === activeCategory
        );

  const nextProducts = () => {
    if (currentIndex < filteredProducts.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + 4
  );

  return (
    <div className="product-carousel-container">

      <div className="product-category-tabs">

        <button
          className={activeCategory === 'ALL' ? 'active' : ''}
          onClick={() => changeCategory('ALL')}
        >
          ALL
        </button>

        <button
          className={activeCategory === 'FOOD' ? 'active' : ''}
          onClick={() => changeCategory('FOOD')}
        >
          FOOD
        </button>

        <button
          className={activeCategory === 'DRINKS' ? 'active' : ''}
          onClick={() => changeCategory('DRINKS')}
        >
          DRINKS
        </button>

      </div>

      <div className="product-carousel">

        <button
          className="product-carousel-arrow left"
          onClick={previousProducts}
          disabled={currentIndex === 0}
          aria-label="Previous products"
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

        <div className="product-card-list">

          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}

        </div>

        <button
          className="product-carousel-arrow right"
          onClick={nextProducts}
          disabled={
            currentIndex >= filteredProducts.length - 4
          }
          aria-label="Next products"
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

export default ProductCarousel;