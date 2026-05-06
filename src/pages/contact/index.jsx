import contactImage from '../../assets/images/contact.jpg'
const Contact = () => {
    return (
        <div className="min-h-100 bg-slate-100 px-4 py-6">
            <div className="mx-auto max-w-5xl space-y-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="md:mx-auto">
                        <img className="h-[220px] w-full rounded-xl object-cover" src={contactImage} alt="Customer support contact desk" />
                        <h2 className="mt-5 text-2xl font-bold text-slate-900"> Contact Us</h2>
                        <label className="mt-3 max-w-4xl leading-8 text-slate-500"> Name:</label>
                        <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition mt-1" type="text" id="name" />

                        <label className="mt-1 text-slate-700"> Email:</label>
                        <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition mt-1" type="email" id="email" />

                        <label className="mt-1 text-slate-700"> Message:</label>
                        <textarea className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition mt-1" id="message" rows="4" cols="40"></textarea>

                        <button className="mt-2 w-full rounded-xl bg-greenCore-500 px-5 py-3 text-white sm:w-fit" type="submit"> Send Message</button>
                    </div> </section> </div> </div>



    )
}

export default Contact;