import { FC } from "react";
import scss from "./Learning.module.scss";
import image from "../../assets/img/IMAGE.png";
import Image from "next/image";
const Learning: FC = () => {
  return (
    <section className={scss.Learning}>
      <div className={scss.content}>
        <Image
            src={image}
          alt=""
        />
        <div className={scss.learnRight}>
          <h1>Get personalized learning recommendations
            <span></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urnaLorem
            ipsum dolor sit amet.
          </p>
          <button>CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default Learning;
