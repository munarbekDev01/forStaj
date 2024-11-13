"use client";

import { FC, useState } from "react";
import scss from "./Header.module.scss";
import loo from "../../assets/img/IMAGE.svg";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";

const Header: FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <header className={scss.Header}>
      <div className={scss.headTop}>
        <h1>One week only—50% off all courses with code 50OFF at checkout</h1>
      </div>
      <div className="container">
        <div className={scss.content}>
          <Image onClick={() =>
              isMobileNavOpen
                ? setIsMobileNavOpen(false)
                : setIsMobileNavOpen(true)
            } src={loo} alt="" />

          <div className={scss.navs}>
            <h1>Courses</h1>
            <h1>Free Workshops</h1>
            <h1>Blog</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>

          {/* <button
            className={scss.burger}
            
          >
            <span></span>
            <span></span>
            <span></span>
          </button> */}

          {/* Mobile nav */}
          
          <div className={`${scss.mobileNav} ${isMobileNavOpen ? scss.open : ""}`}>
            <h1>Courses</h1>
            <h1>Free Workshops</h1>
            <h1>Blog</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>

          <a>
            <SlBasket />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
