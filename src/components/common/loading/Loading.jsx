import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className={`flex justify-center items-center fixed bottom-0 h-[100vh] w-[100vw] mx-auto z-50 `}
      style={{ backgroundColor: 'var(--color-soft-white)' }}
    >
      <HashLoader color="var(--color-picto-primary)" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;
