import { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/businessData';

function ProductCarousel() {
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
          className="product-carousel-arrow previous"
          onClick={previousProducts}
          disabled={currentIndex === 0}
          aria-label="Previous products"
        >
          ‹
        </button>

        <div className="product-card-list">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <button
          className="product-carousel-arrow next"
          onClick={nextProducts}
          disabled={currentIndex >= filteredProducts.length - 4}
          aria-label="Next products"
        >
          ›
        </button>

      </div>
    </div>
  );
}

export default ProductCarousel;