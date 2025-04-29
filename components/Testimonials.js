function Testimonials() {

    React.useEffect(() => {
        setTimeout(() => {
            document.getElementById("next").click()
        }, 5000)
    }, []);

    const testimonials = [{
        name: "Tushar Shetye",
        designation: "Marketing Manager - West & South Region",
        company: "Pathkind Diagnostics Pvt. Ltd",
        description: "I am thrilled to provide a testimonial for the incredible work done by the agency Ascender Marketing. Their innovative approach, attention to detail, and dedication to capturing our brand essence exceeded our expectations. The team's creativity and professionalism have undoubtedly elevated our brand, and I wholeheartedly recommend their services to anyone seeking top-notch branding solutions.",
        image: "tushar"
    }, {
        name: "Rohan Thete",
        designation: "Marketing and Communication",
        company: "SKF Automotive - India & Southeast Asia",
        description: "I am extremely pleased with the services provided by Ascender Marketing for SKF Stall at the Krishi Darshan Event. Their professionalism, attention to detail, and efficient problem-solving made the entire process seamless. The standout presence they created significantly contributed to event success. I highly recommend Ascender Marketing for their outstanding support.",
        image: "rohan"
    }, {
        name: "Vikram Singh Thakur",
        designation: "National Trade Marketing Manager",
        company: "Allied Blenders and Distillers Ltd.",
        description: "I wanted to take a moment to express my sincere gratitude for the exceptional marketing services Ascender has provided. Ascender Marketing team's creativity, strategic approach, and unwavering dedication have significantly contributed to the success of our recent campaigns. Working with Ascender Marketing talented professionals has been a pleasure. Your responsiveness, attention to detail, and ability to adapt to evolving market trends have set a standard of excellence that truly distinguishes Ascender Marketing Solutions.Thank you for being an invaluable partner in our marketing endeavors. We look forward to continuing this successful collaboration and achieving even greater milestones together.",
        image: "vikram"
    }, {
        name: "Kartik Deo",
        designation: "Manager - Inside Sales and Marketing",
        company: "Konecranes and Demag Private Limited",
        description: "I have know Ascender Marketing for now over 8 years. Together, we have done quite a few events and the way they were executed is brilliant. The professionalism in their approach is commendable. They ensure that every small thing is taken care of when planning the event and the execution is always flawless. I recommend Ascender Marketing for all your future events.",
        image: "kartik"
    }]

    const marque1 = [{
        label: "Flawless Events",
        color: "#FCE7C7"
    }, {
        label: "Successful Strategies",
        color: "#D2CFFD"
    }, {
        label: "Thrive",
        color: "#FACADD"
    }, {
        label: "Empower Your Brand",
        color: "#D2CFFD"
    }, {
        label: "Transform",
        color: "#F9C6C1"
    }, {
        label: "Engage",
        color: "#FACADD"
    }, {
        label: "Empower",
        color: "#FCE7C7"
    }]

    const marque2 = [{
        label: "Unleash Inspiration",
        color: "#FCE7C7"
    }, {
        label: "Reach New Heights",
        color: "#D2CFFD"
    }, {
        label: "Elevate Experiences",
        color: "#FACADD"
    }, {
        label: "Ignite Excitement",
        color: "#F9C6C1"
    }, {
        label: "Create Moments",
        color: "#FACADD"
    }, {
        label: "Enchant",
        color: "#D2CFFD"
    }, {
        label: "Spark Creativity",
        color: "#FCE7C7"
    }]

    return <section className="p-5">
        {/* <h2 className="text-bold text-center">Testimonials</h2> */}
        <h4 className="text-center">Words from our <span className="text-bold">Happy Clients</span></h4>
        <p className="text-center">We take pride in ensuring that our clients have a good working experience.</p>

        <div>
            <marquee scrollamount="20" direction="right">
                {marque1.map(el => <h2 key={el.label} className="d-inline text-bold me-3 text-uppercase" style={{ color: el.color }}>{el.label}</h2>)}
            </marquee>
            <marquee scrollamount="20" direction="left">
                {marque2.map(el => <h2 key={el.label} className="d-inline text-bold me-3 text-uppercase" style={{ color: el.color }}>{el.label}</h2>)}
            </marquee>
        </div>

        <div id="carouselExampleIndicators" className="carousel carousel-dark slide py-5" data-bs-ride="true">
            <div className="d-none carousel-indicators">
                {testimonials.map((testimonial, index) => <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>)}
            </div>
            <div className="carousel-inner w-75 m-auto">
                {testimonials.map((testimonial, index) => <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="d-flex align-items-center">
                        <img style={{ borderRadius: "50%" }} height="72" width="72" src={`./styles/images/${testimonial.image}.jpeg`} />

                        <div className="ms-3">
                            <h5 className="text-bold my-2">{testimonial.name}</h5>
                            <p className="mb-1">{testimonial.designation}</p>
                            <p className="mb-1 text-bold">{testimonial.company}</p>
                        </div>
                    </div>

                    <div className="mt-3" style={{ backgroundColor: "#F4F5FB", borderRadius: "12px", padding: "20px" }}>
                        <img style={{ filter: "grayscale(1)" }} className="mb-3" width="16" src="./styles/images/semicolon.png" />
                        <p className="font14">{testimonial.description}</p>
                    </div>
                </div>)}
            </div>
            <br />
            <br />
            <br />

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button id="next" className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
}