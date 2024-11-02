import s from "./LoadMoreBtn.module.css";

interface LoadMore {
  setPage: () => void;
}

const LoadMoreBtn: React.FC<LoadMore> = ({ setPage }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={setPage}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
