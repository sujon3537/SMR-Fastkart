import WrapperComponent from "../common/WrapperComponent";

const MapSection = () => {
  return (
    <WrapperComponent
      classes={{ sectionClass: "map-section", fluidClass: "p-0" }}
      noRowCol={true}
    >
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.888211107245!2d90.3939929!3d23.7513655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9179f3f617d%3A0xd302a73c6c94cd5a!2sSMR%20Leather%20Footwear%20And%20Accessories!5e0!3m2!1sen!2sbd!4v1756381994423!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </WrapperComponent>
  );
};

export default MapSection;
