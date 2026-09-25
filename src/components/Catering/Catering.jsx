import { useState } from 'react';
import CateringCard from './CateringCard.jsx';
import BookingForm from './BookingForm.jsx';
import SectionHeading from './SectionHeading.jsx';
 
function Catering({ title, subtitle, packages }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
 
  return (
    <section className="section section--brand" id="catering">
      <SectionHeading title={title} subtitle={subtitle} light />
      <div className="cat-grid">
        {packages.map((item) => (
          <CateringCard key={item.id} item={item} onBook={setSelectedPackage} />
        ))}
      </div>
 
      {selectedPackage && <BookingForm selectedPackage={selectedPackage} onClose={() => setSelectedPackage(null)} />}
    </section>
  );
}
 
export default Catering;