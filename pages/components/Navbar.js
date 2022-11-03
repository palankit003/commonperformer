import Image from "next/image";
import logo from "../../public/logo.png";
import { BsTwitter } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="flex justify-between lg:px-8 px-4 py-2 items-center bg-black">
      <Image src={logo} className="w-40" />
      <a
        href="https://twitter.com/ankitpal003"
        className="text-[#1da1f2] px-4 text-4xl"
      >
        <BsTwitter />
      </a>
    </nav>
  );
};
export default Navbar;
