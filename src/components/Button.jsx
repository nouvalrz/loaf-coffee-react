import clsx from "clsx";
import PropTypes from "prop-types";

function Button({ type = "button", className, title }) {
  return (
    <button
      type={type}
      className={clsx(
        "w-full px-3 py-2 mt-6 font-semibold rounded cursor-pointer bg-orange",
        className
      )}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
