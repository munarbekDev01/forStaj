import { FC } from "react";
import scss from "./Welcome.module.scss";
import frame from "../../assets/img/Frame.png";
import Image from "next/image";
const Welcome: FC = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Featured Course </h1>
            <h2>Run your own online learning platform</h2>
            <p>
              A deep-dive on the Instagram algorythm, hashtags, content
              strategy, and branding.
            </p>
            <span>Kathryn Murphy</span>
            <button>LEARN MORE</button>
          </div>
          <div className={scss.forImg}>
            <Image src={frame} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
