import aboutImage from '../../assets/images/about-us.jpg'

const AboutUs = () => {
    return (
        <div className="md:mx-auto">
            <img className="w-full bg-greenCore-50" src={aboutImage} alt="Team collaboration meeting" />
            <h2 className="mb-3 text-2xl text-slate-800">About Us</h2>
            <p className="mb-4 max-w-3xl text-slate-500">
                We are a creative team focused on building simple, useful, and modern digital experiences.
                Our goal is to help clients turn ideas into clear and engaging websites that are easy to use.
            </p>
            <p className="max-w-3xl text-slate-500">
                From planning and design to development and support, we value quality work, strong communication,
                and practical solutions that match real business needs.
            </p>
        </div>
    )
}

export default AboutUs