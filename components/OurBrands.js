function OurBrands() {
    const brands = []
    for (let index = 1; index < 28; index++) {
        if (index < 10) {
            brands[index] = `./styles/images/brands/Client Logo 0${index}.png`
        } else {
            brands[index] = `./styles/images/brands/Client Logo ${index}.png`
        }
    }
    return <section className="ascender-light p-5">
        <h2 className="text-bold text-center">Brands trusted on us</h2>
        {/* <div className="row">
            {brands.map(brand => <div key={brand} className="p-3 col-2">
                <img src={brand} />
            </div>)}
        </div> */}

        <div className="slider-container">
            <div className="slider">
                <div className="logos">
                    {brands.map(brand => <img className="me-5" src={brand} />)}
                </div>
            </div>
        </div>
    </section>
}