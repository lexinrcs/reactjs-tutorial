import servicesImage from '../../assets/images/services.jpg'
const Service = () => {
    return (

        <div className="min-h-100 bg-slate-100 px-4 py-6">
            <div className="mx-auto max-w-5xl space-y-6">
                
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <img src={servicesImage} alt="Web design and development services" className="h-[220px] w-full rounded-xl object-cover" />
                    {/* <img className="w-full bg-greenCore-50" src={servicesImage} alt="Web design and development services" /> */}
                    <h2 className="mt-5 text-2xl font-bold text-slate-900">Our Services</h2>
                    <p className="mb-4 max-w-3xl text-slate-500">
                        We offer web design, responsive front-end development, website updates, and general maintenance
                        for small businesses, student projects, and personal brands.
                    </p>
                    <p className="max-w-3xl text-slate-500">
                        Whether you need a landing page, a portfolio, or a complete company website, we can help create
                        a clean and professional online presence.
                    </p>
                </section>

            </div></div>


    )
}
export default Service