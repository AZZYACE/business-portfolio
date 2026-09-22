import ImageSlideshow from './ImageSlideshow';
import LocationButton from './LocationButton';

function HomeSection() {
  return (
    <section id="home" className="home-section">
      <ImageSlideshow />
      <LocationButton />
    </section>
  );
}

export default HomeSection;