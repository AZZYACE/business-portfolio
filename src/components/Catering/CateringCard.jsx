function CateringCard({ catering, onBookNow }) {
  return (
    <div className="catering-card">

      <div className="catering-image">
        <img
          src={catering.image}
          alt={catering.name}
        />
      </div>

      <h3>{catering.name}</h3>

      <p>{catering.description}</p>

      <div className="catering-card-bottom">

        <button
          className="catering-view-button"
          type="button"
        >
          VIEW
        </button>

        <button
          className="catering-book-button"
          type="button"
          onClick={() => onBookNow(catering)}
        >
          BOOK NOW
        </button>

      </div>

    </div>
  );
}

export default CateringCard;