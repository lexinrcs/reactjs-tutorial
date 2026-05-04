import aboutImage from '../../assets/images/about-us.jpg'

const AboutUs = () => {
    return (
                <div className="md:mx-auto rounded-2xl shadow-md p-8 border border-slate-200 max-w-5xl mx-4 my-6">
                    <img className="w-full bg-greenCore-50 rounded-xl h-[200px] md:h-auto w-full object-cover mb-5 object-cover" src={aboutImage} alt="Team collaboration meeting" />
                    <h2 className="mb-3 text-2xl text-slate-800 font-ManulifeBold"> About Us</h2>
                    <p className="mb-4 max-w-3xl text-slate-500 mb-4 leading-7">
                        We are a creative team focused on building simple, useful, and modern digital experiences.
                        Our goal is to help clients turn ideas into clear and engaging websites that are easy to use.
                    </p>
                    <p className="max-w-3xl text-slate-500 mb-4 leading-7">
                        From planning and design to development and support, we value quality work, strong communication,
                        and practical solutions that match real business needs.
                    </p>
                </div>
    )
}

export default AboutUs;