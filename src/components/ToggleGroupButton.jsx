import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function ToggleGroupButton({ items, onValueChange }) {
  const [active, setActive] = useState(items[0]);
  const containerRef = useRef(null);
  const [activeBoxStyle, setActiveBoxStyle] = useState({});

  useEffect(() => {
    const activeButton = containerRef.current.querySelector(
      `[data-value="${active}"]`
    );

    setActiveBoxStyle({
      width: `${activeButton.offsetWidth}px`,
      left: `${activeButton.offsetLeft}px`,
      height: `${activeButton.offsetHeight}px`,
    });
  }, [active]);

  const handleClick = (value) => {
    setActive(value);
    onValueChange(value);
  };

  return (
    <div className="mt-4 text-center" data-aos="fade-up">
      <div
        className="inline-flex flex-row gap-3 p-1 rounded-lg bg-orange relative"
        ref={containerRef}
      >
        <div
          className="bg-oat transition-all absolute rounded-lg"
          style={activeBoxStyle}
        ></div>
        {items.map((item, index) => (
          <button
            className={clsx(
              "px-3 py-1 text-xl font-bold  lg:text-2xl capitalize z-10 cursor-pointer",
              { "text-choco": active === item }
            )}
            key={index}
            data-value={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

ToggleGroupButton.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default ToggleGroupButton;
