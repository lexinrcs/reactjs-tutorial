import servicesImage from '../../assets/images/services.jpg'

const Services = () => {
    return (
        <div className="md:mx-auto">
            <img className="w-full bg-greenCore-50" src={servicesImage} alt="Web design and development services" />
            <h2 className="mb-3 text-2xl text-slate-800">Our Services</h2>
            <p className="mb-4 max-w-3xl text-slate-500">
                We offer web design, responsive front-end development, website updates, and general maintenance
                for small businesses, student projects, and personal brands.
            </p>
            <p className="max-w-3xl text-slate-500">
                Whether you need a landing page, a portfolio, or a complete company website, we can help create
                a clean and professional online presence.
            </p>
        </div>
    )
}

export default Services