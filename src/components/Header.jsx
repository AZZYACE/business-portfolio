import { useEffect, useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
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
      >
        HOME
      </a>

      <span className="header-nav-dot">•</span>

      <a
        href="#products"
        className={activeSection === 'products' ? 'active' : ''}
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