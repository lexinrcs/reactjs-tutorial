import servicesImage from '../../assets/images/services.jpg';

const Services = () => {
    return (
        <div className="md:mx-auto rounded-2xl bg-white shadow-2xs p-8 border-slate-200 max-w-5xl mx-4 my-6">
            <img className="w-full bg-greenCore-50 rounded-2xl h-[220px] sm:h-[200px] mb-5 object-cover" src={servicesImage} alt="Web design and development services" />
            <h2 className="mb-3 text-2xl text-slate-800 font-ManulifeDemiBold">Our Services</h2>
            <p className="mb-4 max-w-3xl text-slate-500 leading-7">
                We offer web design, responsive front-end development, website updates, and general maintenance
                for small businesses, student projects, and personal brands.
            </p>
            <p className="max-w-3xl text-slate-500 leading-7">
                Whether you need a landing page, a portfolio, or a complete company website, we can help create
                a clean and professional online presence.
            </p>
        </div>
    )
};

export default Services;