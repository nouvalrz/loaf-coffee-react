import PropTypes from "prop-types";

function MenuItem({ name, price, imageSource }) {
  return (
    <div className="rounded-lg bg-oat bg-orange-product-gradient overflow-clip w-[200px] shrink-0">
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
};

export default MenuItem;
