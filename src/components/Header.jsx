function Header() {
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
        <a href="#home">HOME</a>
        <a href="#products">PRODUCTS</a>
        <a href="#catering">CATERING</a>
        <a href="#order">ORDER NOW</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;