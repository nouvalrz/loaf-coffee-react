import PropTypes from "prop-types";

function HomeJumbotron({ titleComponent, imageSource }) {
  return (
    <div className="flex flex-col gap-8 p-4 rounded-lg lg:justify-between lg:flex-row  bg-mustard bg-orange-gradient lg:p-12 lg:max-h-[600px] overflow-clip">
      <div className="lg:self-start">{titleComponent}</div>
      <div className="self-center w-full lg:self-end lg:grow">
        <img
          src={imageSource}
          alt="jumbotron-product"
          className="w-full max-w-xl mx-auto lg:max-w-full "
        />
      </div>
    </div>
  );
}

HomeJumbotron.propTypes = {
  titleComponent: PropTypes.element.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default HomeJumbotron;
