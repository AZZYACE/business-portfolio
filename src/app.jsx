import { useState } from 'react';
import Header from './components/Header';
import HomeSection from './components/Home/HomeSection';
import ProductsSection from './components/Products/ProductsSection';
import OrderSection from './components/Order/OrderSection';
import AboutSection from './components/About/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <>
      <Header />

      <main>
        <HomeSection />
        <ProductsSection onAddToCart={addToCart} />
        {/*<CateringSection />*/}
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