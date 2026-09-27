function BusinessFeatures({ features }) {
  return (
    <div className="about-subsection why-choose-us">

      <h3>WHY CHOOSE US</h3>

      <div className="about-subsection-line"></div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>

            <h4>{feature.title}</h4>

            <p>{feature.description}</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default BusinessFeatures;