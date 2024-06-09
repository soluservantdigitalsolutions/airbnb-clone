import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};

export default Logo;
