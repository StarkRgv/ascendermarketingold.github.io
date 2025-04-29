function Banner() {
  const events = [
    "Corporate events",
    "Exhibition stall",
    "Retail promotions",
    "Concerts",
    "Fashion Shows",
    "Road Shows",
    "In-Store Activity",
    "Mall Activity",
    "Dealers Meet",
  ];
  const [activeEvent, setActiveEvent] = React.useState(0);
  const [isNavOpen, setIsNavOpen] = React.useState(false); // State to track sidebar

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setActiveEvent((prevIndex) => (prevIndex + 1) % events.length);
    }, 2000);

    return () => clearInterval(timerId);
  }, [events.length]);

  const openNav = () => {
    console.log("hrllo");

    setIsNavOpen(true); // Set the state to open the sidebar
  };

  const closeNav = () => {
    setIsNavOpen(false); // Set the state to close the sidebar
  };

  return (
    <section className="position-relative" style={{ backgroundColor: "#000" }}>
      {/* Sidebar */}
      <div
        id="mySidenav"
        className={`sidenav ${isNavOpen ? "" : "d-none"}`} // Toggle d-none class
        style={{ width: isNavOpen ? "50%" : "0" }} // Change width based on state
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">Our Clients</a>
        <a href="#">Our Services</a>
        <a href="#">Our Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact Us</a>
      </div>

      {/* Other content */}
      <img
        className="position-absolute"
        style={{ left: "60px", top: "10px" }}
        src="./styles/images/Ascender Logo_Black-01 2.png"
      />
      <img
        onClick={openNav}
        className="position-absolute"
        style={{ right: "60px", top: "10px" }}
        src="./styles/images/Frame 2.png"
      />

      <img
        className="d-none w-100"
        style={{ height: "800px" }}
        src="./styles/images/Banner.png"
      />
      <video
        className="w-100"
        style={{ height: "800px" }}
        preload="auto"
        autoPlay={true}
        loop="loop"
        muted="muted"
      >
        <source src="./styles/images/vdo.mp4" type="video/mp4" />
      </video>

      <div
        className="position-absolute w-100 d-flex align-items-center justify-content-center flex-column"
        style={{ zIndex: 1, bottom: "50px" }}
      >
        <p className="font14 text-white m-0">Know more</p>
        <div
          style={{ height: "60px", width: "1px", backgroundColor: "white" }}
        ></div>
        <div
          style={{
            height: "10px",
            width: "10px",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      <div
        style={{ zIndex: 1, bottom: "10px" }}
        className="w-100 position-absolute d-flex align-items-center justify-content-center"
      >
        <div className="d-none flex-row">
          <h4 className="text-white">In Ascender we take care</h4>
          <h4 className="w-50">
            <span className="gradiant-blue text-bold">
              {events[activeEvent]}
            </span>
          </h4>
        </div>

        <table>
          <tr>
            <td width={310}>
              <h4 className="text-white">In Ascender we take care</h4>
            </td>
            <td width={250}>
              {" "}
              <h4 className="text-rotator">
                <span className="animated-text gradiant-blue text-bold">
                  {events[activeEvent]}
                </span>
              </h4>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default Banner;
