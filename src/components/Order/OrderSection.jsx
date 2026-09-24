import { useState } from 'react';

function OrderSection({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart,
}) {
  const [customer, setCustomer] = useState({
    name: '',
    contact: '',
    email: '',
    orderType: 'pickup',
    address: '',
    notes: '',
  });

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const deliveryFee =
    customer.orderType === 'delivery' && cartItems.length > 0
      ? 50
      : 0;

  const total = subtotal + deliveryFee;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      alert('Please add at least one product to your order.');
      return;
    }

    if (
      !customer.name ||
      !customer.contact ||
      !customer.email
    ) {
      alert('Please complete your customer information.');
      return;
    }

    if (
      customer.orderType === 'delivery' &&
      !customer.address
    ) {
      alert('Please enter your delivery address.');
      return;
    }

    alert(
      `Order confirmed!\n\nTotal: ₱ ${total.toFixed(2)}\n\nThank you, ${customer.name}!`
    );

    onClearCart();

    setCustomer({
      name: '',
      contact: '',
      email: '',
      orderType: 'pickup',
      address: '',
      notes: '',
    });
  };

  return (
    <section id="order" className="order-section">

      <div className="order-header">
        <h2>ORDER NOW</h2>
      </div>

      <div className="order-container">

        <div className="order-left">

          <h3>YOUR ORDER</h3>

          <div className="order-divider"></div>

          {cartItems.length === 0 ? (
            <div className="empty-order">
              <p>Your order is currently empty.</p>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('products')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    })
                }
              >
                VIEW PRODUCTS
              </button>
            </div>
          ) : (
            <div className="order-product-grid">

              {cartItems.map((product) => (
                <div
                  className="order-product-card"
                  key={product.id}
                >

                  <div className="order-product-top">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="order-product-info">

                      <span className="order-product-name">
                        {product.name}
                      </span>

                      <span className="order-product-price">
                        ₱ {Number(product.price).toFixed(2)}
                      </span>

                    </div>

                  </div>

                  <div className="order-product-controls">

                    <div className="quantity-controls">

                      <button
                        type="button"
                        onClick={() =>
                          onDecrease(product.id)
                        }
                        aria-label={`Decrease ${product.name}`}
                      >
                        −
                      </button>

                      <span>
                        {product.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          onIncrease(product.id)
                        }
                        aria-label={`Increase ${product.name}`}
                      >
                        +
                      </button>

                    </div>

                    <button
                      type="button"
                      className="delete-product-button"
                      onClick={() =>
                        onRemove(product.id)
                      }
                      aria-label={`Remove ${product.name}`}
                    >
                      🗑
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

          <div className="order-summary">

            <h3>ORDER SUMMARY</h3>

            <div className="order-summary-box">

              <div>
                <span>Subtotal:</span>
                <span>
                  ₱ {subtotal.toFixed(2)}
                </span>
              </div>

              <div>
                <span>Delivery Fee:</span>
                <span>
                  ₱ {deliveryFee.toFixed(2)}
                </span>
              </div>

              <div className="order-total">
                <span>Total:</span>
                <span>
                  ₱ {total.toFixed(2)}
                </span>
              </div>

            </div>

          </div>

        </div>

        <div className="customer-information">

          <h3>CUSTOMER INFORMATION</h3>

          <div className="order-divider"></div>

          <form
            className="customer-form"
            onSubmit={handleSubmit}
          >

            <label>
              Name

              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Contact Number

              <input
                type="text"
                name="contact"
                value={customer.contact}
                onChange={handleChange}
                placeholder="+63 XXX-XXX-XXXX"
              />
            </label>

            <label>
              Email Address

              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="email@address.com"
              />
            </label>

            <div className="order-type">

              <span>Order Type</span>

              <div>

                <label>
                  <input
                    type="radio"
                    name="orderType"
                    value="pickup"
                    checked={
                      customer.orderType === 'pickup'
                    }
                    onChange={handleChange}
                  />
                  Pickup
                </label>

                <label>
                  <input
                    type="radio"
                    name="orderType"
                    value="delivery"
                    checked={
                      customer.orderType === 'delivery'
                    }
                    onChange={handleChange}
                  />
                  Delivery
                </label>

              </div>

            </div>

            <label>
              Delivery Address

              <input
                type="text"
                name="address"
                value={customer.address}
                onChange={handleChange}
                placeholder="Unit/Bldg/House No., Street, Barangay, City, Province"
              />
            </label>

            <label>
              Order Notes/Requests

              <textarea
                name="notes"
                value={customer.notes}
                onChange={handleChange}
              ></textarea>
            </label>

            <div className="order-help">

              <span>
                Need help with your order?
              </span>

              <div>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      })
                  }
                >
                  CONTACT US
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('products')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      })
                  }
                >
                  VIEW PRODUCTS
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="confirm-order-button"
            >
              CONFIRM ORDER
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default OrderSection;