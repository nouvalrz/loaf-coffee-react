import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PromoBannerPortrait({ title, backgroundUrl, buttonTitle, buttonTo }) {
  return (
    <div
      className={`bg-mustard! grow-[1] mt-8 rounded-lg p-5 bg-[100%_auto!] bg-no-repeat! bg-center! flex flex-col justify-between items-stretch`}
      style={{ background: `url(${backgroundUrl})` }}
    >
      <p className="uppercase font-[Archivo] font-extrabold text-xl">{title}</p>
      <Link
        className="py-2 text-xl font-bold text-center rounded-lg bg-orange text-oat"
        to={buttonTo}
      >
        {buttonTitle}
      </Link>
    </div>
  );
}

PromoBannerPortrait.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
  buttonTo: PropTypes.string.isRequired,
};

export default PromoBannerPortrait;
