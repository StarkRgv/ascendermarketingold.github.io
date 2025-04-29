const stats = [{
    count: 80,
    description: "Happy Clients"
}, {
    count: 500,
    description: "Events Managed"
}, {
    count: 200,
    description: "Promotions"
}, {
    count: 50,
    description: "Exhibitions"
}]


const OPTIONS = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
};

const useIsVisible = (elementRef) => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        if (elementRef.current) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(elementRef.current);
                    }
                });
            }, OPTIONS);
            observer.observe(elementRef.current);
        }
    }, [elementRef]);

    return isVisible;
};

const StatsCounter = ({ counter }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let start = 0;
        const end = counter; // The number you want to end at
        const duration = 3000; // Duration in milliseconds
        const incrementTime = Math.floor(duration / end);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, []);

    return <h1 className="text-bold yellow">{count}</h1>;
};


function OurStats() {
    const elemRef = React.useRef();
    const isVisible = useIsVisible(elemRef);
    return <section className="ascender-dark p-5">
        <h1 className="text-bold outlined">OUR STATS</h1>
        <div className="row" ref={elemRef}>
            {stats.map(stat => <div className="col-3 d-flex flex-column" key={stat.description}>
                {isVisible && <StatsCounter counter={stat.count} />}
                <h4 className="text-light">{stat.description}</h4>
            </div>)}
        </div>

        <p className="text-light my-5">Delivering a wide range of events services focusing on the best in class in event industry by our team of experts and specialists.</p>
    </section>
}