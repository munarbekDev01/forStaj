import { FC } from "react";
import scss from "./Footer.module.scss";
import img from "../../assets/img/IMAGE.svg";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.footerTop}>
          <h1>You have the power to define your future.</h1>
          <div className={scss.inp}>
            <input type="text" placeholder="EMAIL ADDRESS" />
            <button>SUBMIT</button>
          </div>
        </div>
        <div className={scss.content}>
          <Image src={img} alt="" />
          <div className={scss.footerBlocks}>
            <div className={scss.block}>
              <h1>learning Platform</h1>
              <p>Home</p>
              <p>Courses</p>
              <p>Free Workshops</p>
              <p>Blog</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className={scss.block}>
              <h1>Template</h1>
              <p>Instructions</p>
              <p>Style Guide</p>
              <p>Licenses</p>
              <p>Changelog</p>
            </div>
            <div className={scss.block}>
              <h2>Follow skillz</h2>
              <div className={scss.icons}>
                <h1>
                  <FaTiktok />
                </h1>
                <h1>
                  <IoLogoInstagram />
                </h1>
                <h1>
                  <FaYoutube />
                </h1>
                <h1>
                  <FaFacebookF />
                </h1>
                <h1>
                  <FaTwitter />
                </h1>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className={scss.footerBottom}>
        <div className="container">
          <h1>
            © Skillz Template <span>Powered by Webflow</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
