import CateringCard from './CateringCard';
import { cateringData } from '../../data/businessData';

function CateringCarousel({ onBookNow }) {
  return (
    <div className="flex w-full justify-center">

      <div className="grid w-fit grid-cols-4 gap-6">

        {cateringData.map((catering) => (
          <div
            key={catering.id}
            className="w-[250px]"
          >
            <CateringCard
              catering={catering}
              onBookNow={onBookNow}
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default CateringCarousel;
