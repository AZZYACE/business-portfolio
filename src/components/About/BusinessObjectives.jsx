function BusinessObjectives({ objectives }) {
  return (
    <div className="about-subsection">

      <h3>OUR OBJECTIVES</h3>

      <div className="about-subsection-line"></div>

      <div className="objectives-grid">
        {objectives.map((objective) => (
          <div className="objective-card" key={objective.id}>

            <span>
              {String(objective.id).padStart(2, '0')}
            </span>

            <h4>{objective.title}</h4>

            <p>{objective.description}</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default BusinessObjectives;