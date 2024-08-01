import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a
          href="https://www.youtube.com/@andikafebriansyah4894"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <a href="https://github.com/afebrii" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/afebrii/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/afebriii/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
