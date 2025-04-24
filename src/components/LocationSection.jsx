function LocationSection() {
  return (
    <section id="location" className="mt-8 lg:mt-12">
      <div className="p-2 pt-6 lg:px-8 text-choco bg-oat" data-aos="fade-up">
        <h2 className="font-[Archivo] font-extrabold text-2xl lg:text-3xl uppercase text-center">
          CHECK OUT OUR PLACE
        </h2>
        <p className="max-w-[1000px] mx-auto mt-3 text-lg lg:text-xl text-center">
          Discover our best-selling delights! Experience the warm ambiance, cozy
          seating, and inviting atmosphere that make every visit special!
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40562023978!2d115.14187063429337!3d-8.672504757819082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1742748748819!5m2!1sid!2sid"
          className="w-full max-w-[700px] h-[500px] p-2 mx-auto border-2! border-dashed! border-choco! rounded-lg mt-6"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationSection;
