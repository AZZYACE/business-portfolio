function MissionVision({ data }) {
  return (
    <div className="mission-vision">

      <div className="about-info-card">
        <h3>MISSION</h3>

        <p>
          {data.mission}
        </p>
      </div>

      <div className="about-info-card">
        <h3>VISION</h3>

        <p>
          {data.vision}
        </p>
      </div>

    </div>
  );
}

export default MissionVision;