import { Photo } from "../../App";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export interface ImageGallery {
  photos: Photo[];

  openModal: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGallery> = ({ photos, openModal }) => {
  return (
    <div>
      <ul className={s.wrapper}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard photo={photo} openModal={() => openModal(photo)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
