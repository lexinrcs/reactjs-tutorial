import homeImage from '../../assets/images/home.jpg'

const Home = () => {
  return (
    <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl md:mx-auto">
      <img
        className="mb-5 h-[200px] w-full rounded-xl object-cover md:h-[220px]"
        src={homeImage}
        alt="Modern website workspace"
      />
      <h2 className="mb-3 text-2xl font-ManulifeBold text-slate-800">Welcome to my Website</h2>
      <p className="mb-4 leading-7 text-slate-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          className="inline-flex w-full justify-center rounded-lg bg-greenCore-500 px-5 py-3 text-center text-white font-ManulifeDemiBold transition-colors duration-200 hover:bg-greenCore-600 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
        <a
          className="inline-flex w-full justify-center rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 text-center text-greenCore-700 font-ManulifeDemiBold transition-colors duration-200 hover:bg-greenCore-100 sm:w-auto"
          href="#"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}

export default Home;
