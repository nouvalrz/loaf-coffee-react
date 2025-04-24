import PropTypes from "prop-types";

function KeySellingItem({ title, description, imageSource }) {
  return (
    <div className="max-w-[300px] text-center" data-aos="fade-up">
      <div className="inline-block p-2 border-2 border-dashed rounded-lg">
        <img src={imageSource} alt="key-selling-1" className="rounded-lg" />
      </div>
      <p className="text-lg font-semibold lg:text-xl text-oat">{title}</p>
      <p className="mt-2 text-base">{description}</p>
    </div>
  );
}

KeySellingItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default KeySellingItem;
