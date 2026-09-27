import { useEffect, useState } from 'react';
import MenuNav from './MenuNav';

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
      <div className="header-main">
        <div className="header-brand">
          <img
            src="/images/logo/shace-logo.jpg"
            alt="SHACE CAFECARY Logo"
            className="header-logo"
          />

          <span>SHACE CAFECARY</span>
        </div>

        <MenuNav activeSection={activeSection} />
      </div>
    </header>
  );
}

export default Header;