import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink =
      `mailto:shacecafecary@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `${formData.message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">

        <div className="contact-header">
        <h2>CONTACT US</h2>
        <div className="contact-title-line"></div>
        <p>Let’s Connect</p>
        </div>

        <div className="contact-divider"></div>

      <div className="contact-container">

        <div className="contact-information">

          <h3>SHACE CAFECARY</h3>

          <div className="contact-details">

            <a
              href="mailto:shacecafecary@gmail.com"
              className="contact-detail"
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

              <span>shacecafecary@gmail.com</span>
            </a>

            <a
              href="tel:09958412835"
              className="contact-detail"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.6 3.5l3 2.4-1.8 3.1c1 2.1 2.6 3.8 4.8 4.8l3.1-1.8 2.4 3c.5.6.4 1.5-.1 2.1l-1.4 1.4c-.6.6-1.5.8-2.3.5-5.7-2.1-9.6-6-11.7-11.7-.3-.8-.1-1.7.5-2.3l1.4-1.4c.5-.5 1.4-.6 2.1-.1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>0995-841-2835</span>
            </a>

            <a
              href="https://maps.app.goo.gl/GspVp11PZM9wyuek6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
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

              <span>
                Shace Cafecary, 499 Catalanacan Rd, Muñoz, Nueva Ecija
              </span>
            </a>

          </div>

          <div className="contact-socials-section">

            <h4>Our Socials</h4>

            <div className="contact-social-content">

              <img
                src="/images/about/about-story.jpg"
                alt="Shace Cafecary"
                className="contact-social-image"
              />

              <div className="contact-social-links">

                <a
                  href="https://www.facebook.com/profile.php?id=61589229329379&sk=about_details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"
                      fill="currentColor"
                    />
                  </svg>

                  <span>
                    https://www.facebook.com/shacecafecary
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/icedteacubes/?hl=en"
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

                  <span>
                    https://www.instagram.com/shacecafecary
                  </span>
                </a>

              </div>
            </div>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label>
            <span>Name</span>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            <span>Email</span>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@address.com"
              required
            />
          </label>

          <label>
            <span>Subject</span>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
            />
          </label>

          <label className="contact-message-field">
            <span>Message</span>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </label>

          <button
            type="submit"
            className="contact-submit-button"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;