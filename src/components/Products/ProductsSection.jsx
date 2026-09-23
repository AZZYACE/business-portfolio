import ProductCarousel from './ProductCarousel';

function ProductsSection({ onAddToCart }) {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <h2>PRODUCTS</h2>
        <p>Our Food &amp; Drinks</p>
      </div>

      <ProductCarousel
        onAddToCart={onAddToCart}
      />
    </section>
  );
}

export default ProductsSection;