import { useState } from 'react';

function MenuNav({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    setMenuOpen(false);

    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className="menu-edge-trigger"
        onMouseEnter={openMenu}
      ></div>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        onMouseEnter={openMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>

      <nav
        className={`menu-nav ${menuOpen ? 'open' : ''}`}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavigation(e, 'home')}
        >
          HOME
        </a>

        <a
          href="#products"
          className={activeSection === 'products' ? 'active' : ''}
          onClick={(e) => handleNavigation(e, 'products')}
        >
          PRODUCTS
        </a>

        <a
          href="#catering"
          className={activeSection === 'catering' ? 'active' : ''}
          onClick={(e) => handleNavigation(e, 'catering')}
        >
          CATERING
        </a>

        <a
          href="#order"
          className={activeSection === 'order' ? 'active' : ''}
          onClick={(e) => handleNavigation(e, 'order')}
        >
          ORDER NOW
        </a>

        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavigation(e, 'about')}
        >
          ABOUT
        </a>

        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavigation(e, 'contact')}
        >
          CONTACT
        </a>
      </nav>
    </>
  );
}

export default MenuNav;