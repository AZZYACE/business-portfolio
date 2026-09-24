import BusinessProfile from './BusinessProfile';
import MissionVision from './MissionVision';
import BusinessObjectives from './BusinessObjectives';
import BusinessFeatures from './BusinessFeatures';

function AboutSection() {
  const businessProfile = {
    title: 'OUR STORY',
    paragraphs: [
      'SHACE CAFECARY is a café and bakery business that offers a variety of food and drinks for customers looking for affordable and satisfying meals.',
      'The business focuses on showcasing quality food products while providing convenient services such as catering and food delivery.',
      'SHACE CAFECARY aims to provide customers with accessible food options and a welcoming experience that makes every meal worth its price.',
    ],
  };

  const missionVision = {
    mission:
      'To provide affordable and satisfying food and drinks while making quality meals accessible to everyone.',
    vision:
      'To become an affordable and popular food establishment known for providing quality products and convenient services to the community.',
  };

  const objectives = [
    {
      id: 1,
      title: 'SHOWCASE PRODUCTS',
      description:
        'Provide customers with a variety of food and drinks while clearly presenting the products available from the business.',
    },
    {
      id: 2,
      title: 'OFFER CATERING',
      description:
        'Provide convenient catering services for customers who need food and meals for different events and occasions.',
    },
    {
      id: 3,
      title: 'SUPPORT ONLINE PURCHASING',
      description:
        'Provide customers with a convenient way to purchase products and request food delivery through the website.',
    },
  ];

  const features = [
    {
      id: 1,
      title: 'AFFORDABLE',
      description:
        'Offers food and drinks at accessible prices while providing value for customers.',
    },
    {
      id: 2,
      title: 'CONVENIENT',
      description:
        'Provides catering and food delivery services to make ordering food easier for customers.',
    },
    {
      id: 3,
      title: 'CUSTOMER-FOCUSED',
      description:
        'Prioritizes customer needs by providing reliable service, clear information, and accessible food options.',
    },
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-header">
        <h2>ABOUT US</h2>
        <div className="about-title-line"></div>
        <p>Established 2026</p>
      </div>

      <BusinessProfile data={businessProfile} />
      <MissionVision data={missionVision} />
      <BusinessObjectives objectives={objectives} />
      <BusinessFeatures features={features} />

    </section>
  );
}

export default AboutSection;