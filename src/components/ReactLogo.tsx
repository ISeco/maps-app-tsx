import reactLogo from "../logo.svg";

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt="React Logo"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: "130px",
      }}
    />
  );
};
