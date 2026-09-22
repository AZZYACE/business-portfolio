function LocationButton() {
  const locationLink =
    "https://maps.app.goo.gl/WrCb6ihC9yRGRxmeA";

  const handleLocationClick = () => {
    window.open(locationLink, "_blank");
  };

  return (
    <button
      className="location-button"
      onClick={handleLocationClick}
      aria-label="View SHACE CAFECARY location"
    >
    <svg
      viewBox="0 0 24 24"
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
    </button>
  );
}

export default LocationButton;