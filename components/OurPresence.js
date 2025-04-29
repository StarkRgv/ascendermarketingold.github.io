
function OurPresence() {
    const [activePlace, setActivePlace] = React.useState("Gurugram");

    const places = [{
        name: "Gurugram",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.1254135539648!2d77.1055472!3d28.43429040000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f004977dc19%3A0xacbfca0f89273d8d!2sAscender%20Marketing%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1715439878063!5m2!1sen!2sin",
        address: {
            description: "Tower A, Paras Twin Towers, Golf Course Road, Sector 54, Gurugram",
        }
    }, {
        name: "Pune",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.211153606969!2d73.7711626!3d18.5645168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becf389effbd%3A0x727d3cfbea5b6b4!2sAscender%20Marketing%20Solutions!5e0!3m2!1sen!2sin!4v1709908566744!5m2!1sen!2sin",
        address: {
            heading: "Pune - Corporate Office",
            description: "Ascender Marketing Solutions Private Limited Pyramid Axis Office 302 Baner Road, Behind Croma Showroom Baner Pune, Maharashtra - 411045",
            phone: "7722078396 / 9579740519",
            email: "info@ascendermarketing.com"
        }
    },
    // {
    //     name: "Delhi",
    //     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.99558793682!2d77.05297022549193!3d28.38920122579848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22f8107df9dd%3A0x6d4903eaf9bf1013!2sBESTECH%20PARK%20VIEW%20SPA%20NEXT%2C%20Sector%2067%2C%20Gurugram%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1709910204111!5m2!1sen!2sin",
    //     address: {
    //         description: "Bestech Park view Spa next Sector 67 Gurugram - 122101",
    //     }
    // },
    {
        name: "Mumbai",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.285422599762!2d72.87192874710617!3d19.115491464571576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c908cc253a05%3A0xfeae56dacb282e81!2sraj%20industrial%20eastate!5e0!3m2!1sen!2sin!4v1709910319450!5m2!1sen!2sin",
        address: {
            description: "A-1,Raj industrial complex Marol militry road marol Andheri East Mumbai, Mumbai, Maharashtra - 400059",
        }
    }, {
        name: "Dubai",
        address: {
            description: "Opening Shortly!",
        }
    }, {
        name: "Thailand",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7216083331305!2d100.86753437969747!3d12.925605983381667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102961489edc04f%3A0x7594c68a49a8a930!2s39%20Moo%2010%2C%20Muang%20Pattaya%2C%20Amphoe%20Bang%20Lamung%2C%20Chang%20Wat%20Chon%20Buri%2020150%2C%20Thailand!5e0!3m2!1sen!2sin!4v1709910443822!5m2!1sen!2sin",
        address: {
            description: "39/135 Moo 10, Soi Khao Noi Sub District Nong Prue Bang Lamung District Chonburi -20150 Thailand ",
        }
    }]
    return <section className="position-relative ascender-light px-3">
        <div className="row m-0">
            <div className="col-3">
                <h2 className="text-bold">Our Presence</h2>
                <div className="border bg-white">
                    {places.map(place => <div className="place pointer p-3 my-3" key={place.name}>
                        <div onClick={() => { if (!place.map) return; setActivePlace(place.name) }} className="d-flex justify-content-between align-items-center">
                            <h4 title={place.address.description} style={{ color: place.name === activePlace ? "blue" : "black" }} className="font18">{place.name}</h4>
                        </div>
                    </div>
                    )}
                </div>
            </div>

            <div className="col-9">
                <iframe src={places.find(place => place.name === activePlace).map}
                    width="100%"
                    height="600px" />
            </div>
        </div>
    </section>
}