function BusinessProfile({ data }) {
  return (
    <div className="about-story">

      <div className="about-story-image">
        <img
          src="/images/about/about-story.jpg"
          alt="SHACE CAFECARY"
        />
      </div>

      <div className="about-story-content">

        <h3>{data.title}</h3>

        {data.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

      </div>

    </div>
  );
}

export default BusinessProfile;