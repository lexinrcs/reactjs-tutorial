import contactImage from '../../assets/images/contact.jpg'

const ContactUs = () => {
    return (
                <div className="md:mx-auto rounded-2xl shadow-md p-8 border border-slate-200 max-w-5xl mx-4 my-6">
                    <img className="w-full bg-greenCore-50 rounded-xl h-[200px] md:h-auto w-full object-cover mb-5 object-cover" src={contactImage} alt="Customer support contact desk"/>
                    <h2 className="mb-3 text-2xl text-slate-800 font-ManulifeBold">Contact Us</h2>

                    <label className="mt-1 text-slate-700 font-ManulifeDemibold"> Name:</label>
                    <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:ring-4 focus:ring-greenCore-100 focus:border-greenCore-500 transition-all" type="text" id="name"/>
                    
                    <label className="mt-1 text-slate-700 font-ManulifeDemibold"> Email:</label>
                    <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:ring-4 focus:ring-greenCore-100 focus:border-greenCore-500 transition-all" type="email" id="email"/>
                    
                    <label className="mt-1 text-slate-700 font-ManulifeDemibold"> Message:</label>
                    <textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:ring-4 focus:ring-greenCore-100 focus:border-greenCore-500 transition-all" id="message" rows="4" cols="40"></textarea>
                    
                    <button className="mt-2 w-full rounded-xl bg-greenCore-500 hover:bg-greenCore-600 hover:translate-y-[1px] transition-all px-5 py-3 text-white sm:w-fit font-ManulifeDemibold" type="submit"> Send Message</button>
                </div>
    )
}

export default ContactUs;