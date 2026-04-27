import contactImage from '../../assets/images/contact.jpg'

const Contact = () => {
    return (
        <div className="mx-4 my-6 grid max-w-5xl gap-3 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:mx-auto">
            <img className="mb-2 h-[220px] w-full rounded-xl bg-greenCore-50 object-cover md:h-[200px]" src={contactImage} alt="Customer support contact desk" />
            <h2 className="mb-1 text-2xl font-bold text-slate-800"> Contact Us</h2>
            <label className="mt-1 font-semibold text-slate-700"> Name:</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100" type="text" id="name"/>

            <label className="mt-1 font-semibold text-slate-700"> Email:</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100" type="email" id="email"/>

            <label className="mt-1 font-semibold text-slate-700"> Message:</label>
            <textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100" id="message" rows="4" cols="40"></textarea>

		    <button className="mt-2 w-full rounded-xl bg-greenCore-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-px hover:bg-greenCore-600 sm:w-fit" type="submit"> Send Message</button>
    	</div>
    )
}

export default Contact;