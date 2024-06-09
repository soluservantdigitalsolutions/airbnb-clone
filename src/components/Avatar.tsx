import noUser from "../assets/images/nouser.png";
const Avatar = () => {
  return (
    <img
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src={noUser}
    />
  );
};

export default Avatar;
