const ImageCard = ({ photo, openModal }) => {
  return (
    <div>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        loading="lazy"
        width="400"
        height="300"
        onClick={openModal}
      />
    </div>
  );
};

export default ImageCard;
