import { useEffect, useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-brand">
        <img
          src="/images/logo/shace-logo.jpg"
          alt="SHACE CAFECARY Logo"
          className="header-logo"
        />

        <span>SHACE CAFECARY</span>
      </div>

      <nav className="header-nav">
      <a
        href="#home"
        className={activeSection === 'home' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        HOME
      </a>

      <span className="header-nav-dot">•</span>

      <a
        href="#products"
        className={activeSection === 'products' ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();

          document.getElementById('products')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
      >
        PRODUCTS
      </a>

      <span className="header-nav-dot">•</span>

      <a
        href="#catering"
        className={activeSection === 'catering' ? 'active' : ''}
      >
        CATERING
      </a>

      <span className="header-nav-dot">•</span>

      <a
        href="#order"
        className={activeSection === 'order' ? 'active' : ''}
      >
        ORDER NOW
      </a>

      <span className="header-nav-dot">•</span>

      <a
        href="#about"
        className={activeSection === 'about' ? 'active' : ''}
      >
        ABOUT
      </a>

      <span className="header-nav-dot">•</span>

      <a
        href="#contact"
        className={activeSection === 'contact' ? 'active' : ''}
      >
        CONTACT
      </a>
    </nav>
    </header>
  );
}

export default Header;