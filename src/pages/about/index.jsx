import aboutImage from '../../assets/images/about-us.jpg'

const About = () => {
    return (
        <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
            <img className="mb-5 h-[220px] w-full rounded-xl bg-green-50 object-cover md:h-[200px]" src={aboutImage} alt="Team collaboration meeting" />
            <h2 className="mb-3 text-2xl font-ManulifeBold text-slate-800">About Us</h2>
            <p className="mb-4 max-w-3xl leading-7 text-slate-500">
                We are a creative team focused on building simple, useful, and modern digital experiences.
                Our goal is to help clients turn ideas into clear and engaging websites that are easy to use.
            </p>
            <p className="max-w-3xl leading-7 text-slate-500">
                From planning and design to development and support, we value quality work, strong communication,
                and practical solutions that match real business needs.
            </p>
        </div>
    )
}

export default About;