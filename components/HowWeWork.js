function HowWeWork() {
    const [active, setActive] = React.useState(0);

    const works = [{
        title: "Research",
        description: "Embark your journey towards a successful event with Ascender Marketing. Our seamless research process creates a strong foundation for all our upcoming events. Through comprehensive examination and consultation, we formulate the objectives, preferences, and requirements of our clients. Our attention to detail ensures that tailor each event in alignment with the unique needs of our clients.",
        img: "research.png",
        bg: "#3428C2"
    }, {
        title: "Ideate",
        description: "Ascender Marketing will breathe life into your dreams through innovative ideas. All important information gathered during the research process is carefully translated into a detailed concept for the event in this phase.",
        img: "ideate.png",
        bg: "#92139B"
    }, {
        title: "Exhibit",
        description: "In this phase, we will showcase our diligently prepared event concepts to you. Through visually stunning and clear communication, we will bring forward a comprehensible roadmap that will bring your vision to life.",
        img: "exhibit.png",
        bg: "#FF0059"
    }, {
        title: "Design",
        description: "The creative prowess at Ascender Marketing will help elevate your event by profusing each element and detail of the event with innovation, creativity, and uniqueness catering to your needs. This experience will be lived through all stages from thematic designs and engaging experiences to leave a lasting impression on your guests.",
        img: "design.png",
        bg: "#11A2E5"
    }, {
        title: "Execute",
        description: "Finally, your dream and vision will unfold into reality with Ascender Marketing. We promise seamless and expert execution by a team of professionals who work with precision, coordination, and attention to detail. All aspects of your event from logistics to management will be executed flawlessly in this stage leaving an impressionable experience for you and your attendees.",
        img: "execute.png",
        bg: "#F1522C"
    }, {
        title: "Evaluate",
        description: "After the long journey from dreaming to executing, we reach this stage to measure success and refine strategies carefully through our evaluation process. At Ascender Marketing, we are guided by an assessment of every event’s performance. Through analyzing key metrics, gathering feedback, and deriving valuable insights, we ensure to keep getting better at every subsequent event. We execute memorable events and learn and grow with each client and experience.",
        img: "evaluate.png",
        bg: "#F4A245"
    }]
    return <section className="p-5">
        <h2 className="text-bold">How we work</h2>

        <div id="carouselExampleIndicators1" className="carousel carousel-dark slide my-5">
            <div className="row">
                {works.map((work, index) => <h5
                    key={index}
                    onClick={() => setActive(index)}
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide-to={index}
                    className={`col-2 text-center text-nowrap pointer works-heading ${active === index ? "active" : ""}`}>{work.title}</h5>)}
            </div>
            <div className="carousel-inner row mt-3">
                {works.map((work, index) => <div key={index} className={`${index === 0 ? 'active' : ""} col-9 pe-3 carousel-item`}>
                    <div style={{ backgroundColor: work.bg }} className="p-3 rounded-4 d-flex">
                        <img src={`./styles/images/howwework/${work.img}`} />
                        <div className="text-white w-50 m-auto p-3">
                            <h5 className="text-left">{work.title}</h5>
                            <p>{work.description}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </section>
}