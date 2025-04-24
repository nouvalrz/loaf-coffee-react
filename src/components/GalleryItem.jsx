import PropTypes from "prop-types";

function GalleryItem({ imageSource }) {
  return (
    <img
      src={imageSource}
      alt={`gallery-item`}
      className="rounded grow-0 lg:w-auto w-[300px] h-auto object-cover"
    />
  );
}

GalleryItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default GalleryItem;
