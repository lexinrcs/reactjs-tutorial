import servicesImage from '../../assets/images/services.jpg';

const Services = () => {
  return (
    <div className="mx-4 my-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg md:mx-auto">
      {/* Image */}
      <img
        className="mb-5 h-[220px] w-full rounded-xl object-cover max-md:h-[200px]"
        src={servicesImage}
        alt="Web design and development services"
      />

      {/* Title */}
      <h2 className="mb-3 text-2xl font-manulife-bold text-slate-800">
        Our Services
      </h2>

      {/* Description */}
      <p className="mb-4 max-w-3xl leading-7 text-slate-500">
        We offer web design, responsive front-end development, website updates,
        and general maintenance for small businesses, student projects, and
        personal brands.
      </p>

      <p className="max-w-3xl leading-7 text-slate-500">
        Whether you need a landing page, a portfolio, or a complete company
        website, we can help create a clean and professional online presence.
      </p>
    </div>
  );
};

export default Services;