import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import { FcLike } from "react-icons/fc";
import { Photo } from "../../App";

export interface ImageModal {
  isOpen: boolean;
  handleOpenModal: (photo: Photo) => void;
  handleCloseModal: () => void;
  photo: Photo | null;
}

const ImageModal: React.FC<ImageModal> = ({
  isOpen,
  handleCloseModal,
  photo,
}) => {
  if (!isOpen) return null;
  if (!photo) {
    return;
  }
  const { urls, alt_description, description, user, likes } = photo;

  return (
    <div className={s.backdrop}>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <img src={urls.regular} alt={alt_description} />
        <div className={s.info}>
          <p>Descriprion: {description}</p>
          <p>Author: {user.name}</p>
          <p>Location: {user.location}</p>
          <p>
            <FcLike /> {likes}
          </p>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
