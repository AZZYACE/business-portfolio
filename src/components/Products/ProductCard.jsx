function ProductCard({ product, onAddToCart }) {
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

        <button
          className="product-view-button"
          type="button"
        >
          VIEW
        </button>

        <button
          className="product-cart-button"
          type="button"
          onClick={() => onAddToCart(product)}
        >
          ADD TO CART
        </button>

      </div>

    </div>
  );
}

export default ProductCard;