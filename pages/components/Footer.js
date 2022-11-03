import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex justify-center items-center text-gray-200 text-xl">
      Created by Ankit Pal
      <a
        href="https://twitter.com/ankitpal003"
        className="text-[#1da1f2] px-4 text-4xl"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default Footer;
