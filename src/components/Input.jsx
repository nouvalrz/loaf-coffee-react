import clsx from "clsx";
import PropTypes from "prop-types";

function Input({ type, name, id, className, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={clsx(
        "block w-full px-3 py-2 mt-2 border rounded focus:border-mustard focus:outline-none focus:ring-0",
        className
      )}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
