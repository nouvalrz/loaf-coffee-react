import PropTypes from "prop-types";

function PromoMenuItem({ tag, title, promoCode, until }) {
  return (
    <div
      className="px-2 py-4 rounded-lg lg:px-4 lg:py-6 bg-orange grow bg-[url(./assets/images/ramadan-offer.png)] bg-no-repeat bg-right-bottom bg-[auto_80%]"
      data-aos="fade-up"
    >
      <p className="font-[Archivo] font-medium lg:text-xl uppercase">{tag}</p>
      <p className="font-[Archivo] font-extrabold lg:text-3xl text-xl uppercase">
        {title}
      </p>
      <p className="inline-block px-4 py-2 mt-4 font-bold rounded lg:text-xl bg-choco">
        Code : {promoCode}
      </p>
      <p className="mt-2">Valid until {until}</p>
    </div>
  );
}

PromoMenuItem.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  promoCode: PropTypes.string.isRequired,
  until: PropTypes.string.isRequired,
};

export default PromoMenuItem;
