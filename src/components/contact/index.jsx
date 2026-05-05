import contactImage from '../../assets/images/contact.jpg'


const Contact = () => {
    return (
        <div className="mx-4 my-6 max-w-6xl rounded-xl border border-slate-200 bg-white p-8 shadow-md md:mx-auto">
            <img
                className="mb-5 h-[220px] w-full rounded-xl object-cover max-md:h-[200px]"
                src={contactImage}
                alt="Customer support contact desk"
            />

            <h2 className="mb-3 text-2xl font-manulife-bold text-slate-800">
                Contact Us
            </h2>

            <label
                htmlFor="name"
                className="mt-1 block font-manulife-demibold text-slate-700"
            >
                Name:
            </label>
            <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
            />

            <label
                htmlFor="email"
                className="mt-4 block font-manulife-demibold text-slate-700"
            >
                Email:
            </label>
            <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
            />

            <label
                htmlFor="message"
                className="mt-4 block font-manulife-demibold text-slate-700"
            >
                Message:
            </label>
            <textarea
                id="message"
                rows="4"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
            />

            <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-greenCore-500 px-5 py-3 font-manulife-demibold text-white transition-all hover:-translate-y-px hover:bg-greenCore-600 sm:w-fit"
            >
                Send Message
            </button>
        </div>
    )
}

export default Contact