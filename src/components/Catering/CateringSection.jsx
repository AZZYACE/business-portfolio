import CateringCarousel from './CateringCarousel';

function CateringSection({ onBookNow }) {
  return (
    <section id="catering" className="catering-section">

      <div className="catering-header">

        <h2>CATERING</h2>

        <p>We Aim To Serve</p>

      </div>

      <CateringCarousel
        onBookNow={onBookNow}
      />

    </section>
  );
}

export default CateringSection;