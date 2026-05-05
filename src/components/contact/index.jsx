import contactImage from '../../assets/images/contact.jpg'


const Contact = () => {
    return (
        <div className="md:mx-auto">
            <img className="w-full bg-greenCore-50" src={contactImage} alt="Customer support contact desk" />
            <h2 className="mb-1 text-2xl text-slate-800"> Contact Us</h2>
            <label className="mt-1 text-slate-700"> Name:</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition" type="text" id="name" />

            <label className="mt-1 text-slate-700"> Email:</label>
            <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition" type="email" id="email" />

            <label className="mt-1 text-slate-700"> Message:</label>
            <textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition" id="message" rows="4" cols="40"></textarea>

            <button className="mt-2 w-full rounded-xl bg-greenCore-500 px-5 py-3 text-white sm:w-fit" type="submit"> Send Message</button>
        </div>
    )
}

export default Contact