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
    paymentMethod: 'cash',
    address: '',
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
    notes: '',
  });

  const [notification, setNotification] = useState('');

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

  const handleRemove = (product) => {
    onRemove(product.id);

    setNotification(
      `${product.name} has been removed from your order.`
    );

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const getPaymentMessage = () => {
    if (
      customer.orderType === 'delivery' &&
      customer.paymentMethod === 'card'
    ) {
      return 'Please pay by card to the delivery man upon delivery.';
    }

    if (
      customer.orderType === 'delivery' &&
      customer.paymentMethod === 'cash'
    ) {
      return 'Please prepare cash payment for the delivery man upon delivery.';
    }

    if (
      customer.orderType === 'pickup' &&
      customer.paymentMethod === 'card'
    ) {
      return 'Please pay by card when you pick up your order at the physical shop.';
    }

    return 'Please pay in cash when you pick up your order at the physical shop.';
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

    if (
      customer.paymentMethod === 'card' &&
      (
        !customer.cardNumber ||
        !customer.cardholderName ||
        !customer.expiryDate ||
        !customer.cvv
      )
    ) {
      alert('Please complete all card payment information.');
      return;
    }

    setNotification(
      `Order confirmed! Total: ₱${total.toFixed(
        2
      )}. ${getPaymentMessage()}`
    );

    setTimeout(() => {
      setNotification('');
    }, 5000);

    onClearCart();

    setCustomer({
      name: '',
      contact: '',
      email: '',
      orderType: 'pickup',
      paymentMethod: 'cash',
      address: '',
      cardNumber: '',
      cardholderName: '',
      expiryDate: '',
      cvv: '',
      notes: '',
    });
  };

  const goToProducts = () => {
    document
      .getElementById('products')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <>
      {notification && (
        <div className="order-notification">

          <span className="order-notification-icon">
            ✓
          </span>

          <div>
            <strong>Order Confirmed!</strong>

            <p>{notification}</p>
          </div>

        </div>
      )}

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
                          handleRemove(product)
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

            <div className="order-view-products">

              <button
                type="button"
                onClick={goToProducts}
              >
                VIEW PRODUCTS
              </button>

            </div>

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

              {customer.orderType === 'delivery' && (
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
              )}

              <div className="order-payment">

                <span>
                  How would you like to pay?
                </span>

                <select
                  name="paymentMethod"
                  value={customer.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="card">
                    Card
                  </option>

                  <option value="cash">
                    Cash
                  </option>
                </select>

              </div>

              {customer.paymentMethod === 'card' && (
              <div className="order-card-payment">

                <label>
                  Card Number

                  <input
                    type="text"
                    name="cardNumber"
                    value={customer.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </label>

                <label>
                  Cardholder Name

                  <input
                    type="text"
                    name="cardholderName"
                    value={customer.cardholderName}
                    onChange={handleChange}
                    placeholder="Name on card"
                  />
                </label>

                <div className="order-card-row">

                  <label>
                    Expiry Date

                    <input
                      type="month"
                      name="expiryDate"
                      value={customer.expiryDate}
                      onChange={handleChange}
                    />
                  </label>

                  <label>
                    CVV

                    <input
                      type="text"
                      name="cvv"
                      value={customer.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength="4"
                    />
                  </label>

                </div>

              </div>
            )}

              <div className="order-payment-info">

                <strong>
                  Payment Information
                </strong>

                <p>
                  {getPaymentMessage()}
                </p>

              </div>

              <label>
                Order Notes/Requests

                <textarea
                  name="notes"
                  value={customer.notes}
                  onChange={handleChange}
                  placeholder="Tell us about any special requests..."
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
                    onClick={goToProducts}
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
    </>
  );
}

export default OrderSection;