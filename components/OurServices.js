
function OurServices() {
    const [active, setActive] = React.useState(0);

    const services = [{
        name: "EVENTS",
        descrition: "Help your brand shine and succeed through carefully curated events by Ascender Marketing. Our services are designed to help transform your vision into a reality through seamless execution from conceptualization to implementation. We personalize our events according to your unique needs to captivate your audience through a bouquet of services performed by experts. By bringing together passion, creativity, and a keen eye for detail, we can help convert an ordinary event into an extraordinary experience.",
        images: ["Event/event1.jpg", "Event/event2.jpg", "Event/event3.JPG", "Event/event9.JPG", "Event/event5.JPG", "Event/event6.JPG"]
    }, {
        name: "PROMOTIONS",
        descrition: "Ascender Marketing provides strategic promotional services to spark brand visibility and engagement by crafting compelling campaigns to resonate with your brand and reach your target audience. We should be your answer from activating your brand to launching new products. Our team of seasoned professionals uses their expertise to leverage innovation and creativity to create buzz and drive results through impactful experiences.",
        images: ["Activation/promotion1.jpg", "Activation/promotion2.jpg", "Activation/promotion3.jpg", "Activation/promotion4.jpg"]
    }, {
        name: "AUDIT",
        descrition: "Ascender Marketing’s comprehensive audit services can help you ensure accuracy and accountability in all your events. We precisely review and analyze all aspects of an event from budget to logistics. Our core lies in providing valuable insights to our clients through transparency and efficiency to optimize events.",
        images: ["Audit/audit1.png", "Audit/audit2.png", "Audit/audit3.png"]
    }, {
        name: "RURAL",
        descrition: "Our specialized rural event management services will help you extend your boundaries beyond the urban landscapes and help you understand the dynamics of different rural markets. We, at Ascender Marketing, recognize the needs of our clients and those of the local communities to ensure a seamless and authentic connection between the two. Partner with us to ace many rural events from agricultural fairs to community festivals to unlock new potentials and build new relationships.",
        images: ["Rural/rural1.jpg", "Rural/rural2.jpg", "Rural/rural3.png", "Rural/rural4.png"]
    }, {
        name: "RETAIL",
        descrition: "Enhance your customer engagement, boost sales, and transform mere retail experiences into unforgettable brand interactions with Ascender Marketing. Our personalized services can help you drive foot traffic store openings, product showcases, and even in-store promotions.",
        images: ["Retail/retail1.JPG", "Retail/retail2.JPG", "Retail/retail3.JPG", "Retail/retail4.JPG"]
    }, {
        name: "TRADE FAIRS",
        descrition: "Showcase your brand to industry specialists and potential clients using Ascender Marketing’s expert event management services. We specialize in creating captivating and engaging trade fair experiences for our clients paying attention to all details from design to logistics. Our team of skilled and specialised professionals with work relentlessly to ensure that your brand stands out in a crowded marketplace. Help us help you form meaningful connections in your industry today!",
        images: ["Trade/trade1.jpg", "Trade/trade2.jpg", "Trade/trade3.jpg", "Trade/trade4.jpg"]
    }]
    return <section className="py-5 my-5 ascender-light">
        <div className="w-50 m-auto text-center">
            <h2 className="text-bold">Our Services</h2>
            <p>We turn events into unforgettable experiences. Our comprehensive suite of services is designed to elevate your occasions, be it corporate events, promotions, audits, retail experiences, rural engagements, or trade fairs. At Ascender Marketing, we blend creativity with precision, offering strategic event planning, seamless execution, and meticulous evaluation.</p>
        </div>
        <div id="carouselExampleIndicators0" className="carousel carousel-dark slide my-5">
            <div className="row">
                {services.map((service, index) => <h3
                    key={index}
                    onClick={() => setActive(index)}
                    data-bs-target="#carouselExampleIndicators0"
                    data-bs-slide-to={index}
                    className={`col-2 text-center text-nowrap pointer service-heading ${active === index ? "active" : ""}`}>{service.name}</h3>)}
            </div>
            <div className="carousel-inner row mt-3">
                <div className="col-3 position-relative">
                    <hr style={{
                        borderTop: "2px solid #C5D1E8", color: "#C5D1E8"
                    }} />
                    <div className="position-absolute" style={{
                        height: "10px",
                        width: "10px",
                        border: "1px solid #C5D1E8",
                        borderRadius: "5px",
                        right: "3px",
                        top: "11.5px"
                    }}></div>
                </div>

                {services.map((service, index) => <div key={index} className={`${index === 0 ? 'active' : ""} col-9 pe-3 carousel-item`}>
                    <div className="pe-3">
                        <p>{service.descrition}</p>
                        <div style={{ overflowX: "auto", paddingRight: "25%" }} className="d-flex">
                            {service.images.map((image, imageIndex) => <img style={{ height: "169px", width: "269px" }} key={imageIndex} className="mx-2 rounded" src={`./styles/images/${image}`} />)}
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </section >
}