function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <h3>{product.name}</h3>

      <div className="product-price">
        ₱ {product.price}
      </div>

      <div className="product-card-bottom">
        <button className="product-view-button">
          VIEW
        </button>

        <button
          className="product-cart-button"
          aria-label={`Add ${product.name} to cart`}
        >
          🛒
        </button>
      </div>
    </div>
  );
}

export default ProductCard;