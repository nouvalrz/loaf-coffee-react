import PropTypes from "prop-types";

function TestimonialItem({ name, rate, review, imageSource }) {
  return (
    <div
      className="px-5 py-6 rounded-lg bg-oat text-choco flex flex-col"
      data-aos="fade-up"
    >
      <div>
        {Array.from({ length: rate }).map((_, index) => (
          <i className="fa-solid fa-star" key={index}></i>
        ))}
      </div>
      <p className="my-4 flex-1">{review}</p>
      <div className="flex flex-row items-center gap-3">
        <img
          src={imageSource}
          alt={`person ${name}}`}
          className="rounded-full"
        />
        <p>{name}</p>
      </div>
    </div>
  );
}

TestimonialItem.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default TestimonialItem;
