import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PromoSectionMobile({ title, backgroundUrl, buttonTitle, buttonTo }) {
  return (
    <section id="promo" className="block px-2 mt-4 lg:hidden">
      <div
        className={`bg-mustard grow-[1] rounded-lg p-5 bg-[url('${backgroundUrl}')] bg-[100%_auto] bg-no-repeat bg-right-top flex flex-col justify-between items-stretch min-h-[180px]`}
      >
        <p className="uppercase font-[Archivo] font-extrabold text-xl">
          {title}
        </p>
        <Link
          to={buttonTo}
          className="py-2 text-xl font-bold text-center rounded-lg bg-orange text-oat"
        >
          {buttonTitle}
        </Link>
      </div>
    </section>
  );
}

// ../assets/images/ramadan-specials.png

PromoSectionMobile.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
  buttonTo: PropTypes.string.isRequired,
};

export default PromoSectionMobile;
