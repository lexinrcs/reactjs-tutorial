import aboutImage from '../../assets/images/about-us.jpg'
const About = () => {
    return (

        <div className="min-h-100 bg-slate-100 px-4 py-6">
            <div className="mx-auto max-w-5xl space-y-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <img src={aboutImage} alt="Modern website workspace" className="h-[220px] w-full rounded-xl object-cover"
                    />
                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                        About Us
                    </h2>
                    <p className="mt-3 max-w-4xl leading-8 text-slate-500">
                        We are a creative team focused on building simple, useful, and modern digital experiences.
                        Our goal is to help clients turn ideas into clear and engaging websites that are easy to use.
                    </p>
                    <p className="mt-3 max-w-4xl leading-8 text-slate-500">
                        From planning and design to development and support, we value quality work, strong communication,
                        and practical solutions that match real business needs.
                    </p>
                </section>

            </div></div>


    )
}
export default About;