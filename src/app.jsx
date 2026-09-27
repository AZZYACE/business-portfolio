import { useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/Home/HomeSection';
import ProductsSection from './components/Products/ProductsSection';
import CateringSection from './components/Catering/CateringSection';
import OrderSection from './components/Order/OrderSection';
import AboutSection from './components/About/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setNotification(`${product.name} has been added to your order.`);

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const bookCatering = (catering) => {
    console.log('Selected catering:', catering);
  };

  return (
    <>
      <Header />

      {notification && (
        <div className="cart-notification">

          <span className="cart-notification-check">
            ✓
          </span>

          <div className="cart-notification-content">

            <strong>Product Added!</strong>

            <p>{notification}</p>

            <button
              type="button"
              className="view-order-notification-button"
              onClick={() => {
                document
                  .getElementById('order')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  });

                setNotification('');
              }}
            >
              VIEW YOUR ORDER
            </button>

          </div>

        </div>
      )}

      <main>
        <HomeSection />

        <ProductsSection onAddToCart={addToCart} />

        <CateringSection
          onBookNow={bookCatering}
        />

        <OrderSection
          cartItems={cartItems}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClearCart={() => setCartItems([])}
        />

        <AboutSection />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}

export default App;