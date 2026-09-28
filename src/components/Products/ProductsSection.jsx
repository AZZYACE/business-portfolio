import ProductCarousel from './ProductCarousel';

function ProductsSection({ onAddToCart }) {
  const goToOrder = () => {
    document.getElementById("order")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="products" className="products-section">

      <div className="products-header">
        <h2>PRODUCTS</h2>
        <p>Our Food &amp; Drinks</p>
      </div>

      <ProductCarousel
        onAddToCart={onAddToCart}
      />

      <button
        className="products-order-button"
        type="button"
        onClick={goToOrder}
      >
        CHECK MY CART
      </button>

    </section>
  );
}

export default ProductsSection;