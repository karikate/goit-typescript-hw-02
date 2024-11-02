import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./servises/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

export interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
    location: string;
  };
  likes: number;
}

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoId, setPhotoId] = useState<Photo | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPhoto(query, page);
        setPhotos((prev) => [...prev, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handlerSetPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue: string) => {
    setQuery(searchValue);
    setPhotos([]);
    setPage(1);
  };

  const handleOpenModal = (photo: Photo) => {
    setPhotoId(photo);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          photo={photoId}
        />
      )}
      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage message="Sorry, something went wrong. Please try again" />
      )}
      {photos.length === 0 && !isLoading && !isError && (
        <p>No images found for your search.</p>
      )}
      {photos.length > 0 && <LoadMoreBtn setPage={handlerSetPage} />}
    </div>
  );
};

export default App;
