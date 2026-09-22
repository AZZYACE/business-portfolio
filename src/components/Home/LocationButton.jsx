function LocationButton() {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps",
      "_blank"
    );
  };

  return (
    <button
      className="location-button"
      onClick={handleLocationClick}
      aria-label="View location"
    >
      ●
    </button>
  );
}

export default LocationButton;