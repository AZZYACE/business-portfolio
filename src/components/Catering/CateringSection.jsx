import { useState } from 'react';
import { cateringData } from '../../data/businessData';

function CateringSection() {
  const [selectedCatering, setSelectedCatering] = useState(null);
  const [notification, setNotification] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const [eventDetails, setEventDetails] = useState({
    name: '',
    contact: '',
    email: '',
    eventDate: '',
    guests: '',
    venue: '',
    notes: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEventDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const handleSelectCatering = (catering) => {
    if (selectedCatering?.id === catering.id) {
      setSelectedCatering(null);

      setNotification(
        `${catering.name} selection has been cancelled.`
      );
    } else {
      setSelectedCatering(catering);

      setNotification(
        `${catering.name} has been selected.`
      );
    }

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const guests = Number(eventDetails.guests) || 0;

  const estimatedTotal =
    selectedCatering && guests > 0
      ? Number(selectedCatering.pricePerGuest) * guests
      : 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCatering) {
      alert('Please select a catering service.');
      return;
    }

    if (
      !eventDetails.name ||
      !eventDetails.contact ||
      !eventDetails.email ||
      !eventDetails.eventDate ||
      !eventDetails.guests ||
      !eventDetails.venue
    ) {
      alert(
        'Please complete all required event information.'
      );
      return;
    }

    alert(
      `Catering request submitted!\n\n` +
      `Service: ${selectedCatering.name}\n` +
      `Rate: ₱${Number(
        selectedCatering.pricePerGuest
      ).toFixed(2)} per guest\n` +
      `Date: ${eventDetails.eventDate}\n` +
      `Guests: ${eventDetails.guests}\n` +
      `Estimated Total: ₱${estimatedTotal.toFixed(
        2
      )}\n\n` +
      `Thank you, ${eventDetails.name}!`
    );

    setSelectedCatering(null);

    setEventDetails({
      name: '',
      contact: '',
      email: '',
      eventDate: '',
      guests: '',
      venue: '',
      notes: '',
    });
  };

  return (
    <>
      {notification && (
        <div className="catering-notification">

          <span className="catering-notification-icon">
            ✓
          </span>

          <div className="catering-notification-content">

            <strong>
              Catering Selected!
            </strong>

            <p>
              {notification}
            </p>

          </div>

        </div>
      )}

      <section
        id="catering"
        className="catering-section"
      >

        <div className="catering-header">

          <h2>CATERING</h2>

          <p>
            WE AIM TO SERVE
          </p>

        </div>

        <div className="catering-container">

          <div className="catering-packages">

            <h3>
              OUR CATERING SERVICES
            </h3>

            <div className="catering-divider"></div>

            <div className="catering-package-grid">

              {cateringData.map((catering) => (

                <div
                  className={`catering-package-card ${
                    selectedCatering?.id === catering.id
                      ? 'selected'
                      : ''
                  }`}
                  key={catering.id}
                >

                  <div className="catering-package-image">

                    <img
                      src={catering.image}
                      alt={catering.name}
                    />

                  </div>

                  <div className="catering-package-content">

                    <h4>
                      {catering.name}
                    </h4>

                    <p>
                      {catering.description}
                    </p>

                    <span className="catering-package-price">
                      ₱
                      {Number(
                        catering.pricePerGuest
                      ).toFixed(2)}{' '}
                      / guest
                    </span>

                    <button
                      type="button"
                      className="catering-select-button"
                      onClick={() =>
                        handleSelectCatering(catering)
                      }
                    >
                      {selectedCatering?.id === catering.id
                        ? 'SELECTED'
                        : 'BOOK NOW'}
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {selectedCatering && (
              <div className="selected-catering">

                <span>
                  Selected Catering:
                </span>

                <strong>
                  {selectedCatering.name}
                </strong>

                <span className="selected-catering-price">
                  ₱
                  {Number(
                    selectedCatering.pricePerGuest
                  ).toFixed(2)}{' '}
                  / guest
                </span>

              </div>
            )}

          </div>

          <div className="catering-information">

            <h3>
              EVENT INFORMATION
            </h3>

            <div className="catering-divider"></div>

            <form
              className="catering-form"
              onSubmit={handleSubmit}
            >

              <label>
                Name

                <input
                  type="text"
                  name="name"
                  value={eventDetails.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </label>

              <label>
                Contact Number

                <input
                  type="text"
                  name="contact"
                  value={eventDetails.contact}
                  onChange={handleChange}
                  placeholder="+63 XXX-XXX-XXXX"
                />
              </label>

              <label>
                Email Address

                <input
                  type="email"
                  name="email"
                  value={eventDetails.email}
                  onChange={handleChange}
                  placeholder="email@address.com"
                />
              </label>

              <label>
                Event Date

                <input
                  type="date"
                  name="eventDate"
                  value={eventDetails.eventDate}
                  min={today}
                  onChange={handleChange}
                />
              </label>

              <label>
                Number of Guests

                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={eventDetails.guests}
                  onChange={handleChange}
                  placeholder="Number of guests"
                />
              </label>

              <label>
                Event Venue

                <input
                  type="text"
                  name="venue"
                  value={eventDetails.venue}
                  onChange={handleChange}
                  placeholder="Enter location of the Event venue"
                />
              </label>

              <label>
                Special Requests

                <textarea
                  name="notes"
                  value={eventDetails.notes}
                  onChange={handleChange}
                  placeholder="Tell us about any special requests..."
                ></textarea>
              </label>

              {selectedCatering && (
                <div className="catering-form-summary">

                  <span>
                    Selected Catering
                  </span>

                  <strong>
                    {selectedCatering.name}
                  </strong>

                  <span>
                    Rate: ₱
                    {Number(
                      selectedCatering.pricePerGuest
                    ).toFixed(2)}{' '}
                    / guest
                  </span>

                  {guests > 0 && (
                    <>
                      <span>
                        Guests: {guests}
                      </span>

                      <strong className="catering-estimated-total">
                        Estimated Total: ₱
                        {estimatedTotal.toFixed(2)}
                      </strong>
                    </>
                  )}

                </div>
              )}

              <button
                type="submit"
                className="catering-book-button"
              >
                SUBMIT BOOKING
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}

export default CateringSection;