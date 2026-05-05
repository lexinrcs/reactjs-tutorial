import homeImage from '../../assets/images/home.jpg'

const Hero
    = () => {
        return (
            <div className="md:mx-auto">
                <img className="w-full bg-greenCore-50" src={homeImage} alt="Modern website workspace" />
                <h2 className="mb-3 text-2xl text-slate-800"> Welcome to my Website</h2>
                <p className="max-w-3xl text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a className="inline-block rounded-lg bg-greenCore-500 px-5 py-3 text-white no-underline"> Learn More </a>
                    <a className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-greenCore-700 no-underline"> Get in Touch</a>
                </div>
            </div>
        )
    }

export default Hero
