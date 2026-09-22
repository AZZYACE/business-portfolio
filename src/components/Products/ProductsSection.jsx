function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <h2>PRODUCTS</h2>
        <p>Our Food &amp; Drinks</p>
      </div>

      <div className="products-tabs">
        <button className="active">ALL</button>
        <button>FOOD</button>
        <button>DRINKS</button>
      </div>

      <div className="products-divider"></div>

      <div className="products-carousel">

        <button
          className="products-arrow products-arrow-left"
          aria-label="Previous products"
        >
          ‹
        </button>

        <div className="product-card">
          <div className="product-image">
            FOOD 1
          </div>

          <h3>PRODUCT NAME</h3>

          <div className="product-price">
            ₱ 00.00
          </div>

          <div className="product-actions">
            <button>VIEW</button>
            <button className="cart-button">🛒</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            FOOD 2
          </div>

          <h3>PRODUCT NAME</h3>

          <div className="product-price">
            ₱ 00.00
          </div>

          <div className="product-actions">
            <button>VIEW</button>
            <button className="cart-button">🛒</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            DRINK 1
          </div>

          <h3>PRODUCT NAME</h3>

          <div className="product-price">
            ₱ 00.00
          </div>

          <div className="product-actions">
            <button>VIEW</button>
            <button className="cart-button">🛒</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image">
            DRINK 2
          </div>

          <h3>PRODUCT NAME</h3>

          <div className="product-price">
            ₱ 00.00
          </div>

          <div className="product-actions">
            <button>VIEW</button>
            <button className="cart-button">🛒</button>
          </div>
        </div>

        <button
          className="products-arrow products-arrow-right"
          aria-label="Next products"
        >
          ›
        </button>

      </div>
    </section>
  );
}

export default ProductsSection;