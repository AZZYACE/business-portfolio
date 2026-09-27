import { useState } from 'react';
import { cateringData } from '../../data/businessData';

function CateringSection() {
  const [selectedCatering, setSelectedCatering] = useState(null);
  const [notification, setNotification] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

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

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEventDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;

    setPaymentDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);

    setPaymentDetails({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    });
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

  const downpayment = estimatedTotal * 0.5;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCatering) {
      setNotification('Please select a catering service.');

      setTimeout(() => {
        setNotification('');
      }, 3000);

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
      setNotification(
        'Please complete all required event information.'
      );

      setTimeout(() => {
        setNotification('');
      }, 3000);

      return;
    }

    if (eventDetails.eventDate < today) {
      setNotification(
        'Please select today or a future date for your event.'
      );

      setTimeout(() => {
        setNotification('');
      }, 3000);

      return;
    }

    if (!paymentMethod) {
      setNotification(
        'Please select a payment method.'
      );

      setTimeout(() => {
        setNotification('');
      }, 3000);

      return;
    }

    if (paymentMethod === 'card') {
      if (
        !paymentDetails.cardNumber ||
        !paymentDetails.cardName ||
        !paymentDetails.expiryDate ||
        !paymentDetails.cvv
      ) {
        setNotification(
          'Please complete all card payment information.'
        );

        setTimeout(() => {
          setNotification('');
        }, 3000);

        return;
      }

      const cardNumber = paymentDetails.cardNumber.replace(
        /\s/g,
        ''
      );

      if (!/^\d{16}$/.test(cardNumber)) {
        setNotification(
          'Please enter a valid 16-digit card number.'
        );

        setTimeout(() => {
          setNotification('');
        }, 3000);

        return;
      }

      if (!/^\d{3,4}$/.test(paymentDetails.cvv)) {
        setNotification(
          'Please enter a valid CVV.'
        );

        setTimeout(() => {
          setNotification('');
        }, 3000);

        return;
      }
    }

    if (paymentMethod === 'cash') {
      setNotification(
        `Booking submitted. A 50% downpayment of ₱${downpayment.toFixed(
          2
        )} must be paid in person at the SHACE physical shop.`
      );
    } else {
      setNotification(
        `Booking submitted. A 50% downpayment of ₱${downpayment.toFixed(
          2
        )} is required through card payment.`
      );
    }

    setTimeout(() => {
      setNotification('');
    }, 5000);

    setSelectedCatering(null);

    setPaymentMethod('');

    setPaymentDetails({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    });

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
              {notification.includes('Booking submitted')
                ? 'Booking Submitted!'
                : 'Catering Information'}
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

                      <strong className="catering-downpayment">
                        50% Downpayment: ₱
                        {downpayment.toFixed(2)}
                      </strong>
                    </>
                  )}

                </div>
              )}

              <div className="catering-payment">

                <label>
                  How would you like to pay?

                  <select
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <option value="">
                      Select payment method
                    </option>

                    <option value="card">
                      Card
                    </option>

                    <option value="cash">
                      Cash
                    </option>
                  </select>
                </label>

                {paymentMethod === 'card' && (
                  <div className="catering-card-payment">

                    <label>
                      Card Number

                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        inputMode="numeric"
                      />
                    </label>

                    <label>
                      Cardholder Name

                      <input
                        type="text"
                        name="cardName"
                        value={paymentDetails.cardName}
                        onChange={handlePaymentChange}
                        placeholder="Name on card"
                      />
                    </label>

                    <div className="catering-card-row">

                      <label>
                        Expiry Date

                        <input
                          type="month"
                          name="expiryDate"
                          value={paymentDetails.expiryDate}
                          onChange={handlePaymentChange}
                        />
                      </label>

                      <label>
                        CVV

                        <input
                          type="password"
                          name="cvv"
                          value={paymentDetails.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                          maxLength="4"
                          inputMode="numeric"
                        />
                      </label>

                    </div>

                    {guests > 0 && (
                      <div className="catering-payment-info">
                        <strong>
                          50% Downpayment Required
                        </strong>

                        <span>
                          ₱{downpayment.toFixed(2)}
                        </span>
                      </div>
                    )}

                  </div>
                )}

                {paymentMethod === 'cash' && (
                  <div className="catering-payment-info">

                    <strong>
                      Cash Payment
                    </strong>

                    <p>
                      A 50% downpayment is required
                      and must be paid in person at
                      the SHACE physical shop.
                    </p>

                    {guests > 0 && (
                      <span>
                        Downpayment: ₱
                        {downpayment.toFixed(2)}
                      </span>
                    )}

                  </div>
                )}

              </div>

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