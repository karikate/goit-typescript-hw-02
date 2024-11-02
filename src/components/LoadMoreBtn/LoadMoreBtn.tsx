import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ setPage }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={setPage}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
