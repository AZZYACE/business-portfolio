function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <img
          src="/images/logo/shace-logo.jpg"
          alt="SHACE CAFECARY Logo"
          className="footer-logo"
        />

        <div className="footer-brand">
          <span>SHACE CAFECARY</span>

          <div className="footer-brand-line"></div>

          <div className="footer-socials">

            <a
              href="https://example.com/email"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M4 7l8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>

            <a
              href="https://example.com/phone"
              aria-label="Phone"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.6 3.5l3 2.4-1.8 3.1c1 2.1 2.6 3.8 4.8 4.8l3.1-1.8 2.4 3c.5.6.4 1.5-.1 2.1l-1.4 1.4c-.6.6-1.5.8-2.3.5-5.7-2.1-9.6-6-11.7-11.7-.3-.8-.1-1.7.5-2.3l1.4-1.4c.6-.5 1.5-.6 2.1-.1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://example.com/facebook"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://example.com/instagram"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href="https://example.com/location"
              aria-label="Location"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="location-icon"
              >
                <path
                  d="
                    M12 22
                    C12 22 19 15.2 19 9
                    C19 5.134 15.866 2 12 2
                    C8.134 2 5 5.134 5 9
                    C5 15.2 12 22 12 22
                    Z

                    M12 12
                    C13.657 12 15 10.657 15 9
                    C15 7.343 13.657 6 12 6
                    C10.343 6 9 7.343 9 9
                    C9 10.657 10.343 12 12 12
                    Z
                  "
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>

          </div>
        </div>
      </div>

      <div className="footer-right">
        <p>© 2026 SHACE CAFECARY. All rights reserved.</p>

        <div className="footer-policies">
          <a href="https://example.com/privacy-policy">
            Privacy Policy
          </a>

          <span>|</span>

          <a href="https://example.com/cookie-policy">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;