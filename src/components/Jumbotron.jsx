import PropTypes from "prop-types";

function Jumbotron({ title, description, imageSource }) {
  return (
    <div className="p-4 pb-0! rounded-lg bg-choco bg-orange-gradient lg:p-12 lg:max-h-[600px] text-center overflow-clip">
      <h1 className="font-[Archivo] uppercase lg:text-6xl text-5xl font-extrabold">
        {title}
      </h1>
      <p className="text-xl lg:text-2xl">{description}</p>
      <img src={imageSource} alt="jumbotron-image" className="mx-auto mt-8" />
    </div>
  );
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Jumbotron;
