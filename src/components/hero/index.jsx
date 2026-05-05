import homeImage from '../../assets/images/home.jpg'

const Hero
    = () => {
        return (
            <div className="mx-4 my-6 max-w-6xl rounded-xl border border-slate-200 bg-white p-8 shadow-md md:mx-auto">
                <img
                    className="mb-6 w-full rounded-xl bg-greenCore-50"
                    src={homeImage}
                    alt="Modern website workspace"
                />

                <h2 className="mb-3 text-2xl text-slate-800">
                    Welcome to my Website
                </h2>

                <p className="mb-6 max-w-3xl text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#"
                        className="inline-block rounded-lg bg-greenCore-500 px-5 py-3 text-white no-underline transition-colors hover:bg-greenCore-700"
                    >
                        Learn More
                    </a>

                    <a
                        href="#"
                        className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-greenCore-700 no-underline transition-colors hover:bg-greenCore-100"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        )
    }

export default Hero
