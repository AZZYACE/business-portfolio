import CateringCarousel from './CateringCarousel';

function CateringSection({ onBookNow }) {
  return (
    <section
      id="catering"
      className="w-full px-5 py-10"
    >

      <div className="mb-8 text-center">

        <h2 className="mb-2 text-3xl font-bold">
          CATERING
        </h2>

        <p>
          We Aim To Serve
        </p>

      </div>

      <CateringCarousel
        onBookNow={onBookNow}
      />

    </section>
  );
}

export default CateringSection;