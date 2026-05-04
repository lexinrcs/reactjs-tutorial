import homeImage from '../../assets/images/home.jpg'

const Home = () => {
    return (
                <div className="md:mx-auto rounded-2xl shadow-md p-8 border border-slate-200 max-w-5xl mx-4 my-6">
                    <img className="w-full bg-greenCore-50 rounded-xl h-[200px] md:h-auto w-full object-cover mb-5 object-cover" src={homeImage} alt="Modern website workspace" />
                    <h2 className="mb-3 text-2xl text-slate-800 font-ManulifeBold"> Welcome to my Website</h2>
                    <p className="max-w-3xl text-slate-500 mb-4 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 hover:bg-greenCore-600 px-5 py-3 text-greenCore-700 transition-colors duration-300 hover:text-greenCore-50 no-underline font-ManulifeDemibold block text-center"> Learn More </a>
                        <a className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 hover:bg-greenCore-600 px-5 py-3 text-greenCore-700 transition-colors duration-300 hover:text-greenCore-50 no-underline font-ManulifeDemibold block text-center"> Get in Touch</a>
                    </div>
                </div>
    )
}

export default Home;