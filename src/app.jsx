import Header from './components/Header';
import HomeSection from './components/Home/HomeSection';
import ProductsSection from './components/Products/ProductsSection';

function App() {
  return (
    <>
      <Header />

      <main>
        <HomeSection />
        <ProductsSection />
      </main>
    </>
  );
}

export default App;