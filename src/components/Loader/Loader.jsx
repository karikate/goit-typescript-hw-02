import { Watch } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4d59a9"
        ariaLabel="watch-loading"
      />
    </div>
  );
};

export default Loader;
