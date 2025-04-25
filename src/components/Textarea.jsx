import clsx from "clsx";
import PropTypes from "prop-types";

function Textarea({ name, id, rows, className, placeholder }) {
  return (
    <textarea
      name={name}
      id={id}
      rows={rows}
      className={clsx(
        "block w-full px-3 py-2 mt-2 border rounded focus:border-mustard focus:outline-none focus:ring-0",
        className
      )}
      placeholder={placeholder}
    ></textarea>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
