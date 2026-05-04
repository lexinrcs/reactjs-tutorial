import contactImage from '../../assets/images/contact.jpg'

const Contact = () => {
  return (
    <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl md:mx-auto">
      <img
        className="mb-5 h-[200px] w-full rounded-xl object-cover md:h-[220px]"
        src={contactImage}
        alt="Customer support contact desk"
      />
      <h2 className="mb-3 text-2xl font-ManulifeBold text-slate-800">Contact Us</h2>
      <div className="grid gap-4">
        <label className="font-ManulifeDemiBold text-slate-700">Name:</label>
        <input
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-200 focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
          type="text"
          id="name"
        />
        <label className="font-ManulifeDemiBold text-slate-700">Email:</label>
        <input
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-200 focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
          type="email"
          id="email"
        />
        <label className="font-ManulifeDemiBold text-slate-700">Message:</label>
        <textarea
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition-all duration-200 focus:border-greenCore-500 focus:ring-4 focus:ring-greenCore-100"
          id="message"
          rows="4"
          cols="40"
        />
        <button
          className="w-full rounded-xl bg-greenCore-500 px-5 py-3 text-white font-ManulifeDemiBold transition-all duration-200 hover:bg-greenCore-600 hover:-translate-y-px"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </div>
  )
};

export default Contact;
