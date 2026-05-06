import contactImage from '../../assets/images/contact.jpg'

const Contact = () => {
    return (
        <div className="md:mx-auto rounded-2xl bg-white shadow-2xs p-8 border-slate-200 max-w-5xl mx-4 my-6">
			<img className="w-full bg-greenCore-50 rounded-2xl h-[220px] sm:h-[200px] mb-5 object-cover" src={contactImage} alt="Customer support contact desk" />
			<h2 className="mb-1 text-2xl text-slate-800 font-ManulifeBold"> Contact Us</h2>
			<label className="mt-1 text-slate-700 font-ManulifeDemiBold"> Name:</label>
			<input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:ring-4 focus:bg-greenCore-100 focus:border-greenCore-500 w-full" type="text" id="name"/>

			<label className="mt-1 text-slate-700 font-ManulifeDemiBold"> Email:</label>
			<input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition  focus:ring-4 focus:bg-greenCore-100 focus:border-greenCore-500 w-full" type="email" id="email"/>

			<label className="mt-1 text-slate-700 font-ManulifeDemiBold"> Message:</label>
			<textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition  focus:ring-4 focus:bg-greenCore-100 focus:border-greenCore-500 w-full" id="message" rows="4" cols="40"></textarea>

			<button className="mt-2 w-full rounded-xl bg-greenCore-500 px-5 py-3 text-white sm:w-fit hover:bg-greenCore-600 hover:translate-y-1 transition font-ManulifeDemiBold" type="submit"> Send Message</button>
		</div>
    )
};

export default Contact;