import clsx from "clsx";
import PropTypes from "prop-types";

function FacilitiesItem({ iconSource, title, description }) {
  return (
    <div>
      <i
        className={clsx(
          "flex flex-row items-center justify-center p-3 text-2xl rounded-full fa-solid aspect-square bg-oat text-choco",
          iconSource
        )}
      ></i>
      <p className="mt-2 text-xl font-semibold lg:text-2xl">{title}</p>
      <p>{description}</p>
    </div>
  );
}

FacilitiesItem.propTypes = {
  iconSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FacilitiesItem;
