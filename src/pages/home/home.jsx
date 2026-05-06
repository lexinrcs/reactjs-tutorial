import homeImage from '../../assets/images/home.jpg'
const Home = () => {
    return (
        <main className="min-h-100 bg-slate-100 px-4 py-6">
            <div className="mx-auto max-w-5xl space-y-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <img
                        src={homeImage}
                        alt="Modern website workspace"
                        className="h-[220px] w-full rounded-xl object-cover"
                    />

                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                        Welcome to my Website
                    </h2>

                    <p className="mb-4 max-w-3xl text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#learn-more"
                            className="inline-block rounded-lg bg-greenCore-500 px-5 py-3 font-medium text-white no-underline transition hover:bg-greenCore-600"
                        >
                            Learn More
                        </a>

                        <a
                            href="#contact"
                            className="inline-block rounded-lg border border-greenCore-500 bg-greenCore-50 px-5 py-3 font-medium text-greenCore-700 no-underline transition hover:bg-greenCore-100"
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
