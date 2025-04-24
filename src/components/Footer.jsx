function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-8 px-2 py-6 lg:gap-0 lg:flex-row lg:justify-around bg-orange lg:py-8 lg:px-24 text-oat">
        <div className="flex flex-col">
          <img
            src="./assets/svg/loaf-coffee-logo-landscape.svg"
            alt="loaf-coffee-logo-landscape"
            className="lg:w-auto w-3xs"
          />
          <div className="flex flex-row gap-3 mt-2 text-2xl lg:mx-auto">
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div>
          <p className="font-[Archivo] font-bold uppercase mb-2">
            Opening Hours
          </p>
          <p>Monday - Sunday</p>
          <p>9AM - 10PM</p>
        </div>
        <div>
          <p className="font-[Archivo] font-bold uppercase mb-2">Contact Us</p>
          <ul>
            <li>
              <i className="fa-solid fa-map-pin"></i>
              <p className="inline ml-2">Jl. Masih Jauh, No. 123 Denpasar</p>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <p className="inline ml-2">cs@loafcoffee.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p className="inline ml-2">+62 883 233 111</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
