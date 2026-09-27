function CateringCard({ catering, onBookNow }) {
  const handleView = () => {
    console.log('Viewing catering:', catering);
  };

  return (
    <article className="catering-card">
      <div className="catering-image">
        <img
          src={catering.image}
          alt={catering.name}
        />
      </div>

      <h3>{catering.name}</h3>

      <div className="catering-description">
        {catering.description}
      </div>

      <div className="catering-card-bottom">
        <button
          type="button"
          className="catering-view-button"
          onClick={handleView}
        >
          VIEW
        </button>

        <button
          type="button"
          className="catering-book-button"
          onClick={() => onBookNow(catering)}
        >
          BOOK NOW
        </button>
      </div>
    </article>
  );
}

export default CateringCard;