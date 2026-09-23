import ProductCarousel from './ProductCarousel';

function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <h2>PRODUCTS</h2>
        <p>Our Food &amp; Drinks</p>
      </div>

      <ProductCarousel />
    </section>
  );
}

export default ProductsSection;