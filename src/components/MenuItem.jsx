import PropTypes from "prop-types";
import clsx from "clsx";

function MenuItem({ name, price, imageSource, className }) {
  return (
    <div
      className={clsx(
        "rounded-lg bg-oat bg-orange-product-gradient overflow-clip shrink-0",
        className
      )}
    >
      <img src={imageSource} alt={name} className="w-full" />
      <div className="p-3">
        <p className="uppercase font-[Archivo] font-extrabold text-xl text-choco whitespace-pre-line">
          {name}
        </p>
        <p className="text-xl font-[Archivo] uppercase text-choco">{price}</p>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default MenuItem;
