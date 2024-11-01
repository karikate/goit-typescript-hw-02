import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import { FcLike } from "react-icons/fc";

const ImageModal = ({ isOpen, handleCloseModal, photo }) => {
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
