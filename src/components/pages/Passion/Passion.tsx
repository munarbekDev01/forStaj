import { FC } from "react";
import scss from "./Passion.module.scss";
import { IoStarSharp } from "react-icons/io5";
import { FaCircleDot } from "react-icons/fa6";
import frame from "../../assets/img/Frame2.png";
import Image from "next/image";
const Passion: FC = () => {
  return (
    <section className={scss.Passion}>
      <div className={scss.content}>
        <div className={scss.passTop}>
          <div className="container">
            <div className={scss.passTopInline}>
              <h1>
                <span>
                  <IoStarSharp />
                </span>
                <span>
                  <IoStarSharp />
                </span>
                <span>
                  <IoStarSharp />
                </span>
                <span>
                  <IoStarSharp />
                </span>
                <span>
                  <IoStarSharp />
                </span>
              </h1>
              <p>
                “Kate’s courses are a game changer. She’s thorough, organized,
                and explains things in a no-nonsense way that makes it easy for
                anyone—beginners to experts—to learn something from her courses
                and take their game to the next level.”
              </p>
              <h3>James Brown, Influencer</h3>
              <h5>
              
              </h5>
            </div>
          </div>
        </div>
        <div className={scss.passBottom}>
          <div className="container">
            <div className={scss.passBottomInline}>
                <Image src={frame} alt="" />
                <div className={scss.passBottomText}>
                    <h1>A Passion for Teaching <span></span></h1>
                    <p>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                    <button>ABOUT SKILLZ</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;
